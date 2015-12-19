var expect = require('chai').expect;
var stub = require('sinon').stub;
var mock = require('../../mock');

var nm = require('../../../index');
var log = require('../../../lib/log');

describe('nm.user.login', () => {

  before(() => {
    mock.all('normal');
    stub(log, 'trace');
    stub(log, 'debug');
  });
  afterEach(() => {
    mock.reset();
    nm.user.logout();
  });
  after(() => {
    mock.restore();
    log.trace.restore();
    log.debug.restore();
  });

  it('stores user data in `nm.user.data` after success', (done) => {
    nm.user.login('some@email.io', 'some-password')
      .then(() => {
        expect(nm.user.data.profile.userId).to.be.a('number');
        done();
      });
  });

  it('calls phone-login api for 11-digit accounts', (done) => {
    nm.user.login('13245678901', 'some-password')
      .then(() => {
        expect(mock.fetch.calledWith('user/login/phone')).to.be.true;
        done();
      });
  });

  it('calls email-login api otherwise', (done) => {
    nm.user.login('some@email.io', 'some-password')
      .then(() => {
        expect(mock.fetch.calledWith('user/login/email')).to.be.true;
        done();
      });
  });

  it('catches client-side errors', done => {
    mock.all('timeout');
    nm.user.login('some@email.io', 'some-password')
      .catch(err => {
        expect(err.message).to.equal('TLE');
        done();
      });
  });

  it('catches server-side errors', done => {
    mock.all('serverError');
    nm.user.login('some@email.io', 'some-password')
      .catch(err => {
        expect(err.code).to.not.equal(200);
        done();
      });
  });

  it('catches JSON parsing errors', done => {
    mock.all('wrongJSON');
    nm.user.login('some@email.io', 'some-password')
      .catch(err => {
        expect(err).to.equal('Body parsing failed');
        done();
      });
  });

});
