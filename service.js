'use strict'

var Seneca = require('seneca')
var Mesh = require('seneca-mesh')
var Compilo = require('./lib/compilo')
var envs = process.env

var options = {
  seneca: {
    log: 'silent',
    tag: envs.TASKS_COLLECTOR_COMPILO_TAG || 'tasks-collector-compilo'
  },
  mesh: {
    auto: true,
    listen: [
      {pin: 'cmd:collect-tasks, type:user', model: 'observe'}
    ]
  },
  compilo: {
    url: envs.TASKS_COLLECTOR_COMPILO_URL || 'http://compilo.no'
  },
  isolated: {
    host: envs.TASKS_COLLECTOR_COMPILO_HOST || 'localhost',
    port: envs.TASKS_COLLECTOR_COMPILO_PORT || 8000
  }
}

var Service = Seneca(options.seneca)

if (envs.TASKS_COLLECTOR_COMPILO_ISOLATED) {
  Service.listen(options.isolated)
} else {
  Service.use(Mesh, options.mesh)
}

Service.use(Compilo, options.compilo)
