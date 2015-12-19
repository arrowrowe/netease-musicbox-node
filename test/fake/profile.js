var random = require('../../lib/util/random');
var faker = require('./faker');
var fakeTags = require('./tags');

module.exports = () => ({
  signature: faker.sentence(),
  authority: 0,
  description: faker.sentence(),
  userId: random.integer(10000, 100000),
  nickname: faker.nick(),
  mutual: false,
  vipType: 0,
  expertTags: fakeTags(),
  avatarImgId: 0, // Associated with avatarUrl, but don't want to fake it... Same for the background.
  avatarUrl: faker.avatarUrl(),
  backgroundImgId: 0,
  backgroundUrl: faker.backgroundUrl(),
  province: faker.provinceId(),
  city: faker.cityId(),
  birthday: faker.timeInteger(),
  gender: 1,  // Male. Don't know female and unknown...
  accountStatus: 0,
  authStatus: 0,
  userType: 0,
  defaultAvatar: false,
  detailDescription: faker.sentence(),
  followed: random.bool(),
  djStatus: 0
});
