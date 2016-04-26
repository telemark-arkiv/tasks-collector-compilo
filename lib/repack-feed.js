'use strict'

function repackFeed (error, feed) {
  var data = []
  if (error) {
    console.error(error)
  } else {
    console.log('Ingen feil')
  }
  return data
}

module.exports = repackFeed
