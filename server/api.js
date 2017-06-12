const apicache = require('apicache')
const express = require('express')
const axios = require('axios')
const slugify = require('slugify')
const marked = require('meta-marked')
const moment = require('moment')

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
router.get('/posts', cache(), (req, res) => {
  axios.get(`https://api.github.com/gists/${gistId}`, { headers: { 'Authorization': `token ${githubToken}` } })
    .then(response => response.data.files)

    // Only return posts (*.post.md)
    .then(files => Object.keys(files)
      .filter(key => /\.post\.md$/.test(key))
      .map(key => files[key].content))

    // Extract meta data with meta-marked
    .then(contents => contents.map(content => marked(content)))

    // Only use published posts and sort by this publishedAt
    .then(posts => posts.filter(p => p.meta.publishedAt))
    .then(posts => posts.sort((a, b) => a.meta.publishedAt < b.meta.publishedAt))

    // Return a well-defined json-object
    .then(posts => posts.map(p => ({
      meta: {
        title: p.meta.title || '',
        publishedAt: moment(new Date(p.meta.publishedAt)).format('MMMM Do YYYY'),
        slug: slugify(p.meta.title)
      },
      content: p.html || ''
    })))
    .then(posts => res.json(posts))

    // Give nice Error messages if something does break
    .catch((err) => {
      res.status(500).send('Wups! Something broke.')
      console.error(err.message, err.stack)
    })
})

module.exports = router
