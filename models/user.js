"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('users', {
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
                this.hasMany(models.comments);
                this.hasMany(models.reservations);
            }
        }
    });

    //User.sync();
    return User;
};