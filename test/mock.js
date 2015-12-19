var sinon = require('sinon');
var requestCore = require('../lib/request/core');
var mocked = require('./mock/index');

module.exports = {
  state: 'off',
  states: Object.create(null),
  handle: function (option, ret, callback) {
    if (typeof ret === 'function') {
      return this.handle(option, ret(option), callback);
    } else if (ret instanceof Error) {
      return () => callback(ret);
    } else if (typeof ret === 'string') {
      return () => callback(undefined, ret);
    } else {
      return () => callback(undefined, {
        text: JSON.stringify(ret)
      });
    }
  },
  fetch: function (api, option, callback) {
    var state = api in this.states ? this.states[api] : this.state;
    var ret = api in mocked && state in mocked[api] ? mocked[api][state] : mocked.default[state];
    setTimeout(this.handle(option, ret, callback));
  },
  isOn: function () { return !this.isOff(); },
  isOff: function () { return this.state === 'off'; },
  ensureOn: function () {
    if (this.isOn()) {
      return;
    }
    this.state = 'normal';
    sinon.stub(requestCore, 'perform', (option, callback) => {
      this.fetch(option.url, option, callback);
    });
    sinon.spy(this, 'fetch');
  },
  all: function (state) {
    this.ensureOn();
    this.state = state;
  },
  one: function (api, state) {
    this.ensureOn();
    if (!state) {
      delete this.states[api];
    }
    this.states[api] = state;
  },
  restore: function () {
    if (this.isOff()) {
      return;
    }
    this.state = 'off';
    this.states = Object.create(null);
    requestCore.perform.restore();
    this.fetch.restore();
  },
  reset: function () {
    if (this.isOff()) {
      return;
    }
    this.state = 'normal';
    this.states = Object.create(null);
    requestCore.perform.reset();
    this.fetch.reset();
  }
};
