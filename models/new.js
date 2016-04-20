"use strict";

module.exports = function(sequelize, DataTypes) {
    var New = sequelize.define('news', {
        title: DataTypes.STRING,
        text: DataTypes.TEXT,
        image: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                this.hasMany(models.comments);
            }
        }
    });

    //New.sync();
    return New;
};