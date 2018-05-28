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
        console.log('user/password matches:', res);
        callback(null, res);
      } else {
        console.log('user/password incorrect');
        callback(null, res);
      }
    })
    .catch((err) => {
      console.log('error getting user data', err);
      callback(err, null);
    });
  },
  post: (username, password, callback) => {
    User.findOrCreate({
      where: {
        username: username,
        password: password
      }
    })
    .spread((res, created) => {
      console.log('results of find or create', res._options);
      console.log('created of find or create', created);
      callback(null, res, created);
    })
    .catch((err) => {
      console.log('error created db record,', err);
      callback(err, null, null);
    });
  }
}