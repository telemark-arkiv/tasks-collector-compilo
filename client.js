'use strict'

var seneca = require('seneca')()

seneca.client()

seneca.act('cmd:collect-tasks,user:gasg', function (err, result) {
  console.log(result)
})
