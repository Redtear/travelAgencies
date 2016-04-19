"use strict";

module.exports = function(sequelize, DataTypes) {
    var New = sequelize.define('New', {
        title: DataTypes.STRING,
        text: DataTypes.TEXT,
        image: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                New.hasMany(models.Comment);
            }
        }
    });

    New.sync();
    return New;
};