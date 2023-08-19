const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize.js')
const User = sequelize.define('User', {
  username: {
    type:DataTypes.STRING,
    allowNull:false,
  },
  birthday: {
    type:DataTypes.STRING,
    allowNull:true,
  }
});
module.exports = User