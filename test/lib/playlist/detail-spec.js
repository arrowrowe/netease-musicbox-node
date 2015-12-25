var expect = require('chai').expect;
var stub = require('sinon').stub;
var mock = require('../../mock');

var nm = require('../../../index');
var log = require('../../../lib/log');

var random = require('../../../lib/util/random');

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

  it('calls playlist-detail api', (done) => {
    var playlistId = random.integer(1000, 100000);
    nm.playlist.detail(playlistId)
      .then(res => {
        expect(mock.fetch.calledWith('playlist/detail')).to.be.true;
        expect(res.id).to.equal(playlistId);
        done();
      });
  });

});
