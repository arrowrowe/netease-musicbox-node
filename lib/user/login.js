'use strict';

const hp = require('../hp');
const crypto = require('./login/crypto');
const build = require('./login/build');
const constants = require('./login/constants');

module.exports = (username, password) => {
  let option = build(username, password);
  option.form = crypto.aesRsaEncrypt(
    JSON.stringify(option.form),
    constants.nonce,
    constants.pubKey,
    constants.modulus
  );
  return hp(option);
};
