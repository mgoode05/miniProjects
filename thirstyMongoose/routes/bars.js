var express = require('express');
var router = express.Router();
var bars = require('./../controllers/barsController')

/* GET home page. */
router.get('/', bars.index);
router.get('/new', bars.newBar);
router.post('/', bars.create);
router.get('/:id', bars.show);

module.exports = router;
