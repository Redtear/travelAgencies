var express = require('express');
var router = express.Router();

/* GET tours */
router.get('/:tourname', function(req, res, next) {
  res.render('tour', { title: 'Express' });
});

module.exports = router;
