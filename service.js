'use strict'

var Seneca = require('seneca')
var Mesh = require('seneca-mesh')
var Compilo = require('./lib/compilo')
var envs = process.env

var options = {
  seneca: {
    tag: envs.TASKS_COLLECTOR_COMPILIO_TAG || 'tasks-collector-compilio'
  },
  mesh: {
    auto: true,
    listen: [
      {pin: 'cmd:collect-tasks', model: 'observe'}
    ]
  },
  compilo: {
    url: envs.TASKS_COLLECTOR_COMPILO_URL || 'http://compilo.no'
  },
  isolated: {
    host: envs.TASKS_COLLECTOR_COMPILIO_HOST || 'localhost',
    port: envs.TASKS_COLLECTOR_COMPILIO_PORT || '8000'
  }
}
var Service = Seneca(options.seneca)

if (envs.TASKS_COLLECTOR_COMPILIO_ISOLATED) {
  Service.listen(options.isolated)
}
else {
  Service.use(Mesh, options.mesh)
}

Service.use(Compilo, options.compilo)
