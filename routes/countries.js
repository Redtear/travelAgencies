var express = require('express');
var router = express.Router();

/* GET countrie */
router.get('/', function(req, res, next) {
    res.render('countries', { title: 'Express' });
});

router.get('/:name', function(req, res, next) {
    res.render('countrie', { title: 'Express', content: req.params.name });
});

module.exports = router;