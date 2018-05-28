const { User } = require('../../db/schemas');
const { connection } = require('../../db/config');
const Sequelize = require('sequelize');

module.exports = {
  get: (username, password, callback) => {
    User.findOne({
      where: {
        username: username,
        password: password
      }
    })
    .then((res) => {
      if (res) {
        console.log('user/password matches');
        callback(null, true);
      } else {
        console.log('user/password incorrect');
        callback(null, false);
      }
    })
    .catch((err) => {
      console.log('error getting user data', err);
      callback(err, null);
    });
  },
  post: (input, output, callback) => {
    Conversion.create({
      input: input,
      output: output
    })
    .then((res) => {
      console.log('successfully created db record');
      callback(null, res);
    })
    .catch((err) => {
      console.log('error created db record,', err);
      callback(err, null);
    });
  }
}