'use strict';

const newArray = require('../../lib/util/new-array');
const random = require('../../lib/util/random');
const faker = require('./faker');
const fakeArtist = require('./artist');
const fakeQualityMusic = require('./quality-music');

module.exports = () => {
  let trackName = faker.noun();
  let artists = newArray(random.integer(1, 2), () => fakeArtist());
  return {
    'starred': random.bool(),
    'popularity': random.integer(1, 100),
    'starredNum': 0,
    'playedNum': 0,
    'dayPlays': 0,
    'hearTime': 0,
    'mp3Url': faker.musicUrl(trackName),
    'rtUrls': null,
    'name': trackName,
    'id': random.integer(100000, 1000000),
    'position': random.integer(1, 10),
    'duration': random.integer(200000, 400000),
    'status': 1,
    'alias': [],
    'artists': artists,
    'copyrightId': 5003,
    'score': random.integer(0, 101),
    'hMusic': fakeQualityMusic(trackName),
    'mMusic': fakeQualityMusic(trackName),
    'lMusic': fakeQualityMusic(trackName),
    'bMusic': fakeQualityMusic(trackName),
    'audition': fakeQualityMusic(trackName),
    'album': {
      'songs': [],
      'name': faker.noun(),
      'id': random.integer(10000, 100000),
      'type': 'EP/Single',  // don't know other types...
      'size': random.integer(1, 10),
      'status': 1,
      'description': '',
      'tags': '',
      'alias': newArray(random.integer(0, 4), () => faker.noun()),
      'artists': artists,
      'copyrightId': 5003,
      'briefDesc': '',
      'artist': artists[0],
      'pic': 0,
      'picId': 0,
      'picUrl': faker.avatarUrl(),
      'commentThreadId': random.string(15, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_'),
      'publishTime': faker.timeInteger(),
      'company': faker.noun(),
      'blurPicUrl': faker.backgroundUrl(),
      'companyId': 0
    },
    'commentThreadId': random.string(15, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_'),
    'fee': 0,
    'mvid': 0,
    'ftype': 0,
    'rtype': 0,
    'rurl': null,
    'copyFrom': '',
    'ringtone': '',
    'disc': '',
    'no': 2,
    'crbt': null,
    'rtUrl': null
  };
};
