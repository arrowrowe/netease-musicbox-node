'use strict';

const hp = require('../hp');

module.exports = function (offset, limit) {
  limit = limit || 100;
  offset = offset === undefined ? 0 : offset;
  return this.data ? hp({
    method: 'GET',
    url: 'http://music.163.com/api/user/playlist/',
    form: {
      'offset': offset,
      'limit': limit,
      'uid': this.data.profile.userId
    }
  }) : Promise.reject('Login required');
};
