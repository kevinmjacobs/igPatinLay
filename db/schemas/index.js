const { connection } = require('../config/index');
const Sequelize = require('sequelize');

const Conversion = connection.define('conversion', {
  input: {
    type: Sequelize.STRING,
    allowNull: false
  },
  output: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

const User = connection.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

connection.sync()
  .then(() => console.log('Schema synced to db'))
  .catch((err) => console.log('Error syncing tables,', err));

module.exports = {
  Conversion: Conversion,
  User: User
}