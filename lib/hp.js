'use strict';

const log = require('./log');
const chalk = require('chalk');

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
const Identity = x => x;
const request = (option, callback) =>{
  if (!option.filter) {
    option.filter = Identity;
  }
  (option.method === 'POST' ?
    superagent.post(option.url).send(option.form) :
    superagent.get(option.url).query(option.form)
  ).set(headersDefault).timeout(1000).end(callback);
};

module.exports = option => new Promise((resolve, reject) => request(option, (err, res) => {
  log.debug('%s to "%s" with %j.', option.method, chalk.blue(option.url), option.form);
  if (err) {
    log.trace('Error occured: %j.', err);
    reject(err);
    return;
  }
  let body = res.text;
  try {
    body = JSON.parse(body);
    log.trace('Body parsed as JSON.');
  } catch (e) {
    log.trace('Body parsing failed.');
  }
  resolve(option.filter(body));
}));
