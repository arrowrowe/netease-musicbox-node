'use strict';

const random = require('../../lib/util/random');

module.exports = trackName => ({
  'name': trackName,
  'id': random.integer(100000000, 1000000000),
  'size': random.integer(10000000, 100000000),
  'extension': 'mp3',
  'bitrate': 96000,
  'dfsId': random.integer(1000000000000000000000000000, 2900000000000000000000000000),
  'playTime': random.integer(100000, 1000000),
  'sr': random.integer(10000, 100000),
  'volumeDelta': (random.integer(0, 1000) - 500) / 1000000
});
