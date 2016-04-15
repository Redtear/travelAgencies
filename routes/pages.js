var express = require('express');
var router = express.Router();

/* GET page */
router.get('/:name', function(req, res, next) {
    res.render('page', { title: 'Express', content: req.params.name  });
});

module.exports = router;