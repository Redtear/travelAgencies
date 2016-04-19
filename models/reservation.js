"use strict";

module.exports = function(sequelize, DataTypes) {
    var Reservation = sequelize.define('Reservation', {
        // default fields
    }, {
        classMethods: {
            associate: function (models) {
                Reservation.belongsTo(models.Tour, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
                Reservation.belongsTo(models.User, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    Reservation.sync();
    return Reservation;
};