"use strict";

module.exports = function(sequelize, DataTypes) {
    var Section = sequelize.define('Section', {
        name: DataTypes.STRING,
        link: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Section.hasMany(models.Page);
            }
        }
    });

    Section.sync();
    return Section;
};