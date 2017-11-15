var express = require('express');
var router = express.Router();
var bars = require('./../controllers/beersController')

/* GET users listing. */
router.post('/bars/:id/posts', beers.create)
router.delete('/bars/:id/beers/:beer_id', beers.destroy)


module.exports = router;





// function(req, res, next) {
//   res.render('beers', { title: 'Express' });
// });