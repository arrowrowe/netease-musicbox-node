'use strict';

const request = require('../request');

module.exports = function (offset, limit) {
  limit = limit === undefined ? 100 : limit;
  offset = offset === undefined ? 0 : offset;
  return this.data ? request({
    method: 'GET',
    url: 'user/playlist',
    form: {
      'offset': offset,
      'limit': limit,
      'uid': this.data.profile.userId
    },
    filter: data => {
      this.playlist = data.playlist;
      return data;
    }
  }) : Promise.reject('Login required');
};
