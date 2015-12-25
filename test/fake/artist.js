const random = require('../../lib/util/random');
const faker = require('./faker');

module.exports = () => ({
  'img1v1Id': 0,
  'name': faker.nick(),
  'id': random.integer(10000, 100000),
  'alias': [],
  'picId': 0,
  'briefDesc': '',
  'picUrl': faker.avatarUrl(),
  'albumSize': 0,
  'img1v1Url': faker.backgroundUrl(),
  'trans': '',
  'musicSize': 0
});
