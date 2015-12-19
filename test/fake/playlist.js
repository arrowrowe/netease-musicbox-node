var newArray = require('../../lib/util/new-array');
var random = require('../../lib/util/random');
var faker = require('./faker');
var fakeProfile = require('./profile');
var fakeTags = require('./tags');

module.exports = length => newArray(length || random.index(20), () => {
  var creaetorProfile = fakeProfile();
  return {
    subscribers: [],
    subscribed: random.bool(),
    creator: creaetorProfile,
    artists: null,
    tracks: null,
    name: faker.noun(),
    id: random.index(10000),
    description: faker.sentence(),
    status: 0,
    tags: fakeTags(),
    playCount: random.index(100000),
    userId: creaetorProfile.userId,
    updateTime: faker.timeInteger(),
    createTime: faker.timeInteger(),
    coverImgId: 0,
    coverImgUrl: faker.backgroundUrl(),
    specialType: 0,
    commentThreadId: random.string(15, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_'),
    subscribedCount: random.index(100000),
    trackCount: random.index(1000),
    highQuality: random.bool(),
    trackUpdateTime: faker.timeInteger(),
    newImported: random.bool(),
    totalDuration: 0,
    adType: 0,
    trackNumberUpdateTime: faker.timeInteger(),
    cloudTrackCount: random.index(1)
  };
});
