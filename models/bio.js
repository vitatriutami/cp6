'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      
    // -- Association between user & bio: one to one -- 
      bio.hasOne(models.user, {
    })
  }
}
  bio.init({
    email: DataTypes.STRING,
    fullname: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bio',
  });
  return bio;
};