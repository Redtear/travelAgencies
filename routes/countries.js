var express = require('express');
var router = express.Router();

/* GET countrie */
router.get('/:name', function(req, res, next) {
    res.render('countrie', { title: 'Express' });
});

module.exports = router;