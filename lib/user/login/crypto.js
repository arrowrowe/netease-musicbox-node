'use strict';

const CRYPTO = require('crypto');
const bigInt = require('big-integer');
const random = require('../../util/random');

const crypto = module.exports = {

  md5: text => CRYPTO.createHash('md5').update(text).digest('hex'),

  createSecretKey: length => random.string(length, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'),

  aesEncrypt: (text, secKey) => {
    let cipher = CRYPTO.createCipheriv('AES-128-CBC', secKey, '0102030405060708');
    return cipher.update(text, 'utf-8', 'base64') + cipher.final('base64');
  },

  rsaEncrypt: (text, exponent, modulus) => {
    const rText = text.split('').reverse().join('');
    const radix = 16;
    const encrypted = (
      bigInt(new Buffer(rText).toString('hex'), radix)
    ).modPow(
      bigInt(exponent, radix),
      bigInt(modulus, radix)
    ).toString(radix);
    const modulusTrimed = modulus.replace(/^0+/, '');
    return random.string(modulusTrimed.length - encrypted.length, '0') + encrypted;
  },

  aesRsaEncrypt: (text, nonce, pubKey, modulus) => {
    let secKey = crypto.createSecretKey(16);
    return {
      params: crypto.aesEncrypt(crypto.aesEncrypt(text, nonce), secKey),
      encSecKey: crypto.rsaEncrypt(secKey, pubKey, modulus)
    };
  }

};
