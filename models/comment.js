"use strict";

module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define('comments', {
        text: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function (models) {
                this.belongsTo(models.news, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
                this.belongsTo(models.users, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    //Comment.sync();
    return Comment;
};