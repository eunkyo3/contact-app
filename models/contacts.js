'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate(models) {
      // 여기에 관계를 정의하세요
    }
  }
  Contact.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Contact',
    timestamps: false
  });
  return Contact;
};
