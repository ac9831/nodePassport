var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/token', function(req, res, next){

  const tokenId = req.body.token;
  const facebookId = req.body.id;

  console.log(tokenId);
  console.log(facebookId);


})

module.exports = router;
