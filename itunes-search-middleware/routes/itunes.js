var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

/* GET Jack Johnson data through iTunes API. */
router.get('/', async function (req, res, next) {
  var apiUrl = 'https://itunes.apple.com/search?term=jack+johnson';
  var fetchResponse = await fetch(apiUrl);
  var json = await fetchResponse.json();
  res.json(json);
});

module.exports = router;
