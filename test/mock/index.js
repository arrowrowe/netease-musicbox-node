var fake = Object.create(null);
require('./user/login')(fake);
require('./user/playlist')(fake);

module.exports = {
  'default': {
    'normal': {code: 200, content: 'Default mock here.'},
    'timeout': new Error('TLE'),
    'serverError': {code: 502, message: 'Server-side error occurs.'},
    'wrongJSON': '{"id": 2'
  },
  'user/login/email': {
    'normal': fake.user
  },
  'user/login/phone': {
    'normal': fake.user
  },
  'user/playlist': {
    'normal': fake.playlist
  }
};
