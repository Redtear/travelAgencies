"use strict";

module.exports = function(sequelize, DataTypes) {
    var Tour = sequelize.define('Tour', {
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
                Tour.hasMany(models.Reservation);
            }
        }
    });

    Tour.sync();
    return Tour;
};