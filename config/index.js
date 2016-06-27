'use strict'

const envs = process.env

module.exports = {
  feedHostUrl: envs.COMPILO_FEED_URL || 'https://feed.compilo.no',
  x1: envs.COMPILO_X1 || 'x1value',
  x2: envs.COMPILO_X2 || 'x2value'
}
