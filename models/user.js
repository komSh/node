'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //User.belongsTo(models.Company, {foreignKey: 'companyId', as: 'company'})
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
  //   hooks : {
  //     afterBulkCreate : (record, options) => {
  //         record.dataValues.firstName =  record.dataValues.firstName.toUpperCase();
  //        // record.dataValues.updatedAt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/g, '');
  //     },
     
  // }


  },{
    sequelize,
    modelName: 'User',
  });

 
  return User;
};