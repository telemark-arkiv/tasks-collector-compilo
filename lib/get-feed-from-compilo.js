'use strict'
// A very ugly hack due to Compilo's setup
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const Wreck = require('wreck')
const querystring = require('querystring')
const config = require('../config')
const logTime = require('./log-time')

module.exports = (user, callback) => {
  const userQuery = {
    x1: config.x1,
    x2: config.x2,
    x3: user
  }
  const feedUrl = config.feedHostUrl + '/?' + querystring.stringify(userQuery)

  console.log(`tasks-collector-compilo - ${logTime()}: collecting tasks for ${user}`)

  Wreck.get(feedUrl, (error, response, payload) => {
    if (error) {
      callback(error)
    } else {
      callback(null, payload)
    }
  })
}
