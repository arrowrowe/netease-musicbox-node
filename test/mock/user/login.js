var fakeUser = require('../../fake/user');

module.exports = fake => {
  fake.user = fakeUser();
  fake.user.code = 200;
};
