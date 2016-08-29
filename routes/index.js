var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/token/:tokenid', function(req, res, next){

  const tokenId = req.params.tokenid;

  console.log(tokenId);


})

module.exports = router;
