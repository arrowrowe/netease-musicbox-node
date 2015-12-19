'use strict';

const request = require('../request');

module.exports = function (offset, limit) {
  limit = limit || 100;
  offset = offset === undefined ? 0 : offset;
  return this.data ? request({
    method: 'GET',
    url: 'user/playlist',
    form: {
      'offset': offset,
      'limit': limit,
      'uid': this.data.profile.userId
    }
  }) : Promise.reject('Login required');
};
