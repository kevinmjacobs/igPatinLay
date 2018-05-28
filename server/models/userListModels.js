const { User } = require('../../db/schemas');
const { connection } = require('../../db/config');
const Sequelize = require('sequelize');

module.exports = {
  get: (username, callback) => {
    connection.query(`
      SELECT * FROM conversions c 
      INNER JOIN user_conversions uc ON c.id = uc.conversionId 
      WHERE uc.userId = (
        SELECT id 
        FROM users 
        WHERE username="${username}"
      );`)
    .spread((res, data) => {
      console.log('retrieved user data', res, data);
      callback(null, res);
    })
    .catch((err) => {
      console.log('error getting user data', err);
      callback(err, null);
    });
  }
}