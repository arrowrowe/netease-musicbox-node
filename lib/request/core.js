'use strict';

const headersDefault = {
  'Accept': '*/*',
  'Accept-Encoding': 'gzip,deflate,sdch',
  'Accept-Language': 'zh-CN,en-US;q=0.7,en;q=0.3',
  'Connection': 'keep-alive',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Host': 'music.163.com',
  'Referer': 'http://music.163.com/',
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:39.0) Gecko/20100101 Firefox/39.0'
};

const superagent = require('superagent');
const api = require('./api');

/* istanbul ignore next */
module.exports = {
  perform: (option, callback) =>{
    option.url = api[option.url];
    if (!option.filter) {
      option.filter = x => x;
    }
    (option.method === 'POST' ?
      superagent.post(option.url).send(option.form) :
      superagent.get(option.url).query(option.form)
    ).set(headersDefault).timeout(1000).end(callback);
  }
};
