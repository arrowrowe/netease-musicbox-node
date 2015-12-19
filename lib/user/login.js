'use strict';

const request = require('../request');
const crypto = require('./login/crypto');
const build = require('./login/build');
const constants = require('./login/constants');

module.exports = function (username, password) {
  let option = build(username, password);
  option.form = crypto.aesRsaEncrypt(
    JSON.stringify(option.form),
    constants.nonce,
    constants.pubKey,
    constants.modulus
  );
  option.filter = data => this.data = data;
  return request(option);
};
