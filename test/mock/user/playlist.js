var fakePlaylist = require('../../fake/playlist');

module.exports = fake => {
  var list = fakePlaylist(20);
  fake.playlist = option => {
    var offset = option.form.offset;
    var bound = offset + option.form.limit;
    return {
      code: 200,
      more: bound < list.length,
      playlist: list.slice(offset, bound)
    };
  };
};
