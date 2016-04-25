"use strict";

module.exports = function(sequelize, DataTypes) {
    var Section = sequelize.define('sections', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                this.hasMany(models.pages);
            }
        }
    });
    
    return Section;
};