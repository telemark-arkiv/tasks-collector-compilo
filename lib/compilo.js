'use strict'

const getFeedFromCompilo = require('./get-feed-from-compilo')
const repackFeed = require('./repack-feed')
const logTime = require('./log-time')
const envs = process.env
const pkg = require('../package.json')

module.exports = function (options) {
  const seneca = this

  seneca.add('cmd:collect-tasks, type:user', getTasksFromCompilo)

  return envs.TASKS_COLLECTOR_COMPILO_TAG || 'tasks-collector-compilo'
}

function getTasksFromCompilo (args, callback) {
  callback(null, {ok: true})

  const seneca = this
  const user = args.user
  var result = {
    system: pkg.name,
    version: pkg.version,
    user: user,
    data: []
  }

  getFeedFromCompilo(user, (error, feed) => {
    if (error) {
      console.log(`tasks-collector-compilo - ${logTime()}: error in feed for ${user} - ${JSON.stringify(error)}`)
    } else {
      repackFeed(feed, function (err, data) {
        console.log(`tasks-collector-compilo - ${logTime()}: repacks feed for ${user}`)
        if (err) {
          console.log(`tasks-collector-compilo - ${logTime()}: repack failed for ${user} - ${JSON.stringify(err)}`)
        } else {
          console.log(`tasks-collector-compilo - ${logTime()}: finished collecting tasks for ${user} - found ${data.length}`)
          result.data = data
          seneca.act({info: 'tasks', type: 'user', data: result})
        }
      })
    }
  })
}
