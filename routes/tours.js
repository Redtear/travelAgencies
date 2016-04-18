var express = require('express');
var router = express.Router();

/* GET tours */
router.get('/', function(req, res, next) {
  res.render('tours', { title: 'Express'  });
});

router.get('/:name', function(req, res, next) {
  res.render('tour', { title: 'Express', content: req.params.name  });
});

module.exports = router;
