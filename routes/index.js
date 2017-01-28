var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' , version : (process.env.VERSION||'0.0.0.2')});
});
router.get('/env', function(req, res) {
  res.render('env', {  env: JSON.stringify(process.env)}); //env support
});

module.exports = router;
