var random = require('../../lib/util/random');
var faker = require('./faker');
var fakeProfile = require('./profile');

module.exports = () => {
  var profile = fakeProfile();
  return {
    loginType: 1,
    account: {
      id: profile.userId,
      userName: random.string(10, '0123456789ABCDEF'),
      type: 0,
      status: 0,
      whitelistAuthority: 0,
      createTime: 0,
      tokenVersion: 0,
      ban: 0,
      baoyueVersion: 0,
      donateVersion: 0,
      vipType: 0,
      anonimousUser: false
    },
    profile: profile,
    bindings: [{
      id: random.integer(10000, 100000),
      type: 1,  // Phone
      userId: profile.userId,
      url: '',
      tokenJsonStr: JSON.stringify({
        'cellphone': faker.phone(),
        'hasPassword': random.bool()
      }),
      expired: random.bool(),
      expiresIn: faker.timeInteger(),
      refreshTime: faker.timeInteger()
    }, {
      id: random.integer(10000, 100000),
      type: 5,  // QQ
      userId: profile.userId,
      url: '',
      tokenJsonStr: JSON.stringify({
        'query_authority_cost': random.index(200),
        'nickname': faker.nick(),
        'authority_cost': random.index(200),
        'expires_in': faker.timeInteger(),
        'openid': random.string(32, '0123456789ABCDEF'),
        'login_cost': random.index(200),
        'access_token': random.string(32, '0123456789ABCDEF')
      }),
      expired: random.bool(),
      expiresIn: faker.timeInteger(),
      refreshTime: faker.timeInteger()
    }, {
      id: random.integer(10000, 100000),
      type: 10, // Wechat
      userId: profile.userId,
      url: '',
      tokenJsonStr: JSON.stringify({
        'scope': 'snsapi_userinfo',
        'nickname': faker.nick(),
        'unionid': random.string(28, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-'),
        'openid': random.string(28, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-'),
        'expires_in': faker.timeInteger(),
        'refresh_token': random.string(150, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-'),
        'access_token': random.string(150, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-')
      }),
      expired: random.bool(),
      expiresIn: faker.timeInteger(),
      refreshTime: faker.timeInteger()
    }, {
      id: random.integer(10000, 100000),
      type: 0,  // Mail
      userId: profile.userId,
      url: '',
      tokenJsonStr: JSON.stringify({
        'email': faker.email()
      }),
      expired: random.bool(),
      expiresIn: faker.timeInteger(),
      refreshTime: faker.timeInteger()
    }]
  };
};
