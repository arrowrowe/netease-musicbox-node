'use strict';

const crypto = require('./crypto');
const isPhone = username => /^0\d{2,3}\d{7,8}$|^1[34578]\d{9}$/.test(username);

module.exports = (username, password) => {
  let option = {
    method: 'POST',
    form: {
      password: crypto.md5(password),
      rememberLogin: 'true'
    }
  };
  if (isPhone(username)) {
    option.form.phone = username;
    option.url = 'user/login/phone';
  } else {
    option.form.username = username;
    option.url = 'user/login/email';
  }
  return option;
};
