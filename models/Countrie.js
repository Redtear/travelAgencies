"use strict";

module.exports = function(sequelize, DataTypes) {
    var Countrie = sequelize.define('Countrie', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        image: DataTypes.STRING
    });

    Countrie.sync();
    return Countrie;
};