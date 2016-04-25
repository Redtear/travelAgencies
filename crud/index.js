"use strict";

var models = require('models');

module.exports.create = function (modelStr, params, callback) {

    //validate, check auth

    var model = models[modelStr];

    model.create(params).then(function () {
        callback(null, 1);
    }).catch(function (err) {
        callback(err);
    });
};

module.exports.read = function (modelStr, params, callback) {

    var model = models[modelStr];
    if(params.include)
        for(var i = 0; i < params.include.length; i++)
            params.include[i] = models[params.include[i]];

    model.findAll(params).then(function (result) {
        callback(null, result);
    }).catch(function (err) {
        callback(err);
    });
};

module.exports.update = function (modelStr, params, callback) {

    //validate, check auth

    var model = models[modelStr];

    model.upsert(params).then(function () {
        callback(null, 1);
    }).catch(function (err) {
        callback(err);
    });
};

module.exports.delete = function (modelStr, params, callback) {

    //check auth

    var model = models[modelStr];

    model.destroy(params).then(function () {
        callback(null, 1);
    }).catch(function (err) {
        callback(err);
    });
};