const { Conversion } = require('../../db/schemas');
const { connection } = require('../../db/config');
const Sequelize = require('sequelize');

module.exports = {
  get: (callback) => {
    connection.query('select output, count(id) as totalSaved from conversions group by 1 order by 2 desc LIMIT 10;')
    .spread((res, data) => {
      console.log('query successful')
      callback(null, res);
    })
    .catch((err) => {
      console.log('error retrieving db records,', err);
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