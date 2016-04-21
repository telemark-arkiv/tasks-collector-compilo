'use strict'

var envs = process.env
var pkg = require('../package.json')

module.exports = function (options) {
  var seneca = this

  seneca.add('cmd:collect-tasks, type:user', getTasksFromCompilo)

  return {
    name: envs.TASKS_COLLECTOR_COMPILO_TAG || 'tasks-collector-compilo'
  }
}

function getTasksFromCompilo (args, callback) {
  var seneca = this

  var result = {
    serviceid: pkg.name,
    version: pkg.version,
    timestamp: new Date().getTime(),
    user: args.user,
    results: []
  }

  seneca.act({info: 'tasks', type: 'user', data: result})

  callback(null, result)
}
