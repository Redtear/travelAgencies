"use strict";

module.exports = function(sequelize, DataTypes) {
    var Tour = sequelize.define('tours', {
        name: DataTypes.STRING,
        countrie: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.FLOAT,
        countDays: DataTypes.INTEGER,
        countPeople: DataTypes.INTEGER,
        dataStart: DataTypes.DATE,
        food: DataTypes.STRING,
        image: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                this.hasMany(models.reservations);
            }
        }
    });

    //Tour.sync();
    return Tour;
};