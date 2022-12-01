'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    // Association between user & bio: one to one
    user.belongsTo(models.bio, {
      foreignKey: 'bioId',
      as: 'bio'
    }),
    // Association between user & history: one to many
    user.hasMany(models.history, {
      foreignKey: 'historyId',
      as: 'histories'
    })
  } 
}
  user.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};