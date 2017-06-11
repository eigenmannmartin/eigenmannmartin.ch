const apicache = require('apicache')
const express = require('express')
const axios = require('axios')
const slugify = require('slugify')
const marked = require('meta-marked')

const cache = apicache.options({ statusCodes: { include: [200, 304] } }).middleware
const githubToken = process.env.GITHUB_TOKEN
const gistId = process.env.GIST_ID
const router = express.Router()

if (!gistId) {
  throw new Error(`No Gist ID found in config or via ENV variable.`)
}

if (!githubToken) {
  throw new Error(`Github Token not provided. You will be rate limited.`)
}

// Caching
router.get('/cache/index', (req, res) => res.json(apicache.getIndex()))
router.get('/cache/clear/:target?', (req, res) => res.json(apicache.clear(req.params.target)))

// Request Gist
router.get('/posts', cache(), (req, res, next) => {
  axios.get(`https://api.github.com/gists/${gistId}`, { headers: { 'Authorization': `token ${githubToken}` } })
    .then(response => response.data.files)

    // Only return posts (*.post.md)
    .then(files => Object.keys(files)
      .filter(key => /\.post\.md$/.test(key))
      .map(key => files[key].content))

    // Extract meta data with meta-marked
    .then(contents => contents.map(c => marked(c)))

    // Only use published posts
    .then(posts => posts.filter(p => p.meta.publishedAt))

    // Return a well-defined json-object
    .then(posts => posts.map(p => ({
      meta: {
        title: p.meta.title || '',
        publishedAt: new Date(p.meta.publishedAt),
        slug: slugify(p.meta.title)
      },
      content: p.markdown || ''
    })))
    .then(posts => posts.sort((a, b) => a.meta.publishedAt < b.meta.publishedAt))
    .then(posts => res.json(posts))
})

module.exports = router
