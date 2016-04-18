var express = require('express');
var router = express.Router();

/* GET tours */
router.get('/:id', function(req, res, next) {
    res.render('news', { title: 'Express', content: req.params.id  });
});

module.exports = router;
