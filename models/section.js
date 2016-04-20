"use strict";

module.exports = function(sequelize, DataTypes) {
    var Section = sequelize.define('sections', {
        name: DataTypes.STRING,
        link: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                this.hasMany(models.pages);
            }
        }
    });

    //Section.sync();
    return Section;
};