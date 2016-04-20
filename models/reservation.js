"use strict";

module.exports = function(sequelize, DataTypes) {
    var Reservation = sequelize.define('reservations', {
        // default fields
    }, {
        classMethods: {
            associate: function (models) {
                this.belongsTo(models.tours, {
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

    //Reservation.sync();
    return Reservation;
};