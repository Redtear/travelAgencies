"use strict";

module.exports = function(sequelize, DataTypes) {
    var Page = sequelize.define('pages', {
        title: DataTypes.STRING,
        text: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function (models) {
                this.belongsTo(models.sections, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    //Page.sync();
    return Page;
};