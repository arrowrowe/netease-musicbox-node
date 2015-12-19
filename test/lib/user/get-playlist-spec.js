var expect = require('chai').expect;
var stub = require('sinon').stub;
var mock = require('../../mock');

var nm = require('../../../index');
var log = require('../../../lib/log');

describe('nm.user.getPlaylist', () => {

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

  it('calls playlist api and stores the list in `nm.user.playlist`', (done) => {
    nm.user.login('someone@email.io', 'some-password')
      .then(() => nm.user.getPlaylist())
      .then(() => {
        expect(mock.fetch.calledWith('user/playlist')).to.be.true;
        expect(nm.user.playlist).to.have.length(20);
        done();
      });
  });

  it('supports offset', (done) => {
    nm.user.login('someone@email.io', 'some-password')
      .then(() => nm.user.getPlaylist(10))
      .then(() => {
        expect(mock.fetch.calledWith('user/playlist')).to.be.true;
        expect(nm.user.playlist).to.have.length(10);
        done();
      });
  });

  it('supports limit', (done) => {
    nm.user.login('someone@email.io', 'some-password')
      .then(() => nm.user.getPlaylist(3, 6))
      .then(res => {
        expect(mock.fetch.calledWith('user/playlist')).to.be.true;
        expect(nm.user.playlist).to.have.length(6);
        expect(res.more).to.be.true;
        done();
      });
  });

  it('rejects if not logged in', (done) => {
    nm.user.getPlaylist()
      .catch(err => {
        expect(err).to.equal('Login required');
        done();
      });
  });

});
