"use strict";

module.exports = function(sequelize, DataTypes) {
    var New = sequelize.define('news', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                this.hasMany(models.comments);
            }
        }
    });

    return New;
};