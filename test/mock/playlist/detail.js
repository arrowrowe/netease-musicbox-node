var fakePlaylistDetail = require('../../fake/playlist-detail');

module.exports = fake => {
  fake.playlistDetail = option => {
    var playlistId = option.form.id;
    return {
      code: 200,
      result: fakePlaylistDetail(playlistId)
    };
  };
};
