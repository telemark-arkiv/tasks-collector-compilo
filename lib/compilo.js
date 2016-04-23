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
    system: pkg.name,
    user: args.user,
    data: [
      {
        systemid: 'compilo',
        timestamp: new Date().getTime(),
        title: 'Les leselisten din',
        url: 'http://www.compilo.no'
      }
    ]
  }

  seneca.act({info: 'tasks', type: 'user', data: result})

  callback(null, {ok: true})
}
