"use strict";

module.exports = function(sequelize, DataTypes) {
    var Page = sequelize.define('pages', {
        title: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                is: ["^[a-z-]+$",'i']
            }
        }
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
    
    return Page;
};