"use strict";

module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define('Comment', {
        text: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function (models) {
                Comment.belongsTo(models.New, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
                Comment.belongsTo(models.User, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    Comment.sync();
    return Comment;
};