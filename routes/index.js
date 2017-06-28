const express = require('express');
const request = require('request');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' , version : (process.env.VERSION||'0.0.0.2')});
});
router.get('/env', function(req, res) {
  res.render('env', {  env: JSON.stringify(process.env)}); //env support
});

router.get('/ping/', function(req, res) {
  if (process.env.master)
    request('http://127.0.0.1:3000').pipe(res);
});
module.exports = router;
