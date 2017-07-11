var express = require('express');
var router = express.Router();

var config = require('../config'); // get our config file


console.log('KEY:'); console.log(config.FlickrAPIKey);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Petrica Search Tool' , 'flickrAPIKey' : config.FlickrAPIKey });
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Petrica Search Tool' });
});


module.exports = router;
