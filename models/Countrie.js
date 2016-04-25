"use strict";

module.exports = function(sequelize, DataTypes) {
    var Countrie = sequelize.define('countries', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: DataTypes.STRING
    });
    
    return Countrie;
};