'use strict'

const express = require('express')
const ctrls = require('../controllers')
const api = express.Router()

api.get('/', ctrls.getHomeAPI)
api.post('/search', ctrls.searchDarkAPI)

module.exports = api
