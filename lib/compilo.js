'use strict'

var pkg = require('../package.json')

module.exports = function (options) {
  var seneca = this

  seneca.add('cmd:collect-tasks', getTasksFromCompilo)

  return {
    name: 'nodezoo-npm'
  }
}

function getTasksFromCompilo (args, callback) {
  var result = {
    id: pkg.name,
    version: pkg.version,
    timestamp: new Date().getTime(),
    user: args.user,
    results: []
  }
  callback(null, result)
}
