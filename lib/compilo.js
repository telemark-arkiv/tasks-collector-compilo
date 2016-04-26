'use strict'

var getFeedFromCompilo = require('./get-feed-from-compilo')
var repackFeed = require('./repack-feed')
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
  var user = args.user
  var result = {
    system: pkg.name,
    user: user,
    data: [
      {
        systemid: 'compilo',
        timestamp: new Date().getTime(),
        title: 'Les leselisten din',
        url: 'http://www.compilo.no'
      }
    ]
  }

  var feed = getFeedFromCompilo(user, repackFeed)

  console.log(feed)

  seneca.act({info: 'tasks', type: 'user', data: result})

  callback(null, {ok: true})
}
