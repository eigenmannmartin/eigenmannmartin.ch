const apicache = require('apicache')
const express = require('express')
const axios = require('axios')
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
    .then(files => Object.keys(files)
      .filter(key => /\.post\.md$/.test(key))
      .map(key => files[key]))
    .then(posts => posts.map(p => p.content))
    .then(posts => posts.map(p => marked(p)))
    .then(posts => res.json(posts))
})

module.exports = router
