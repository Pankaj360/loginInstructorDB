var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.userContext) {
    res.render('index', { title: 'Instructor DB', user: req.userContext });
  } else {
    res.render('login', { title: 'Instructor DB' })
  }
});

module.exports = router;
