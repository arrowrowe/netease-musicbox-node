var Faker = require('faker/locale/zh_CN');
var random = require('../../lib/util/random');

module.exports = {
  nick: Faker.name.lastName,
  noun: Faker.hacker.noun,
  sentence: Faker.lorem.sentence,
  provinceId: () => random.element([310000, 320000, 330000]),
  cityId: () => random.element([
    310000,
    320100, 320200, 320400, 320500, 320700, 320800, 320900, 321000, 321100, 321300,
    330100, 330200, 330400, 330700, 330800, 332500
  ]),
  phone: () => '1' + random.string(1, '34578') + random.string(9, '0123456789'),
  email: Faker.internet.email,
  avatarUrl: Faker.image.avatar,
  backgroundUrl: () => Faker.image.nature(random.integer(300, 1000), random.integer(300, 1000)),
  musicUrl: (trackName) => 'http://dict.youdao.com/dictvoice?audio=' + encodeURI(trackName),
  timeInteger: () => random.integer(1400000000, 1400000000000)
};
