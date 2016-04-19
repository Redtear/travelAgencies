"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        login: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        roleId: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                User.hasMany(models.Comment);
                User.hasMany(models.Reservation);
            }
        }
    });

    User.sync();
    return User;
};