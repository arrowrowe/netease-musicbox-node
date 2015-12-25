'use strict';

const newArray = require('../../lib/util/new-array');
const random = require('../../lib/util/random');
const faker = require('./faker');
const fakeProfile = require('./profile');
const fakeTrack = require('./track');
const fakeTags = require('./tags');

module.exports = playlistId => {
  let trackCount = random.integer(1, 10);
  let creatorProfile = fakeProfile();
  return {
    'subscribers': [],
    'subscribedCount': random.integer(1, 1000),
    'subscribed': random.bool(),
    'creator': creatorProfile,
    'artists': null,
    'tracks': newArray(trackCount, () => fakeTrack()),
    'name': faker.noun(),
    'id': playlistId,
    'description': faker.sentence(),
    'status': 0,
    'tags': fakeTags(),
    'playCount': random.integer(1, 10000),
    'userId': creatorProfile.userId,
    'updateTime': faker.timeInteger(),
    'createTime': faker.timeInteger(),
    'coverImgId': 0,
    'coverImgUrl': faker.backgroundUrl(),
    'specialType': 0,
    'commentThreadId': random.string(15, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_'),
    'trackCount': trackCount,
    'highQuality': random.bool(),
    'trackUpdateTime': faker.timeInteger(),
    'newImported': random.bool(),
    'totalDuration': random.integer(300, 300 * trackCount),
    'adType': 0,
    'trackNumberUpdateTime': faker.timeInteger(),
    'cloudTrackCount': 0,
    'commentCount': random.integer(0, 5000),
    'shareCount': random.integer(0, 200)
  };
};
