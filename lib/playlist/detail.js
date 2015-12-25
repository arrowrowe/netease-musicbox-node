'use strict';

const request = require('../request');

module.exports = playlistId => request({
  method: 'GET',
  url: 'playlist/detail',
  form: {id: playlistId},
  filter: data => data.result
});
