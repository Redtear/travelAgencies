"use strict";

module.exports = function(sequelize, DataTypes) {
    var Page = sequelize.define('Page', {
        title: DataTypes.STRING,
        text: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function (models) {
                Page.belongsTo(models.Section, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    Page.sync();
    return Page;
};