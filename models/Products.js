const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize.js')
const Products = sequelize.define('Products', {
  name: {
    type:DataTypes.STRING,
    allowNull:false,
  },
  price: {
    type:DataTypes.INTEGER,
    allowNull:true,
  },
  description: {
    type:DataTypes.STRING,
    allowNull:true,
  },
  picture: {
    type:DataTypes.STRING,
    allowNull:true,
  }
});
module.exports = Products