const Sequelize = require('sequelize');

const connection = new Sequelize('pig_latin','root','', {
  host: 'localhost',
  dialect: 'mysql'
});

connection.authenticate()
  .then(() => console.log('Connected to db successful'))
  .catch((err) => console.log('Unable to connect to db,', err));

module.exports = {
  connection: connection
}