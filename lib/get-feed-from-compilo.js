'use strict'
// A very ugly hack due to Compilo's setup
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

var Wreck = require('wreck')
var querystring = require('querystring')
var config = require('../config')

module.exports = (user, callback) => {
  var userQuery = {
    x1: config.x1,
    x2: config.x2,
    x3: user
  }
  var feedUrl = config.feedHostUrl + '/?' + querystring.stringify(userQuery)

  console.log(`tasks-collector-compilo: collecting tasks for ${user}`)

  Wreck.get(feedUrl, (error, response, payload) => {
    if (error) {
      callback(error)
    } else {
      callback(null, payload)
    }
  })
}
