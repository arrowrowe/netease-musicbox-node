'use strict';

const log = require('./log');
const chalk = require('chalk');
const core = require('./request/core');

module.exports = option => new Promise((resolve, reject) => core.perform(option, (err, res) => {
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
