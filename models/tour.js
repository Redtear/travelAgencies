"use strict";

module.exports = function(sequelize, DataTypes) {
    var Tour = sequelize.define('tours', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        countrie: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                isNumeric: true,
                min: 0
            }
        },
        countDays: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
                min: 1
            }
        },
        countPeople: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
                min: 1
            }
        },
        dataStart: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
                isAfter: new Date().getFullYear() + '-' +  new Date().getMonth() + '-' + new Date().getDay()
            }
        },
        food: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                this.hasMany(models.reservations);
            }
        }
    });
    
    return Tour;
};