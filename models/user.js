"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('users', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$",'i'],
                min: 2
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$",'i'],
                min: 2
            }
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: ["^[a-z0-9]+$",'i'],
                max: 20
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 6
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
            //is: ["^[0-9]+$",'i']
        },
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
                min: 0
            }
        }
    }, {
        classMethods: {
            associate: function(models) {
                this.hasMany(models.comments);
                this.hasMany(models.reservations);
            }
        }
    });
    
    return User;
};