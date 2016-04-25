var express = require('express');
var router = express.Router();
var crud = require('crud');
var async = require('async');

/* GET home page. */
router.get('/', function(req, res, next) {

  var taskNamed = {
    sections: function (callback) {
      crud.read('sections', { include: [ 'pages' ] }, function (err, result) {
        callback(err, result);
      });
    }
  };
  
  async.parallel(taskNamed, function (err, results) {
    if(err)
      next(err);

    res.render('index', { title: 'Express', results: results });
  });

});

module.exports = router;
