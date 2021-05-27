var express = require("express");
var fetch = require("node-fetch");
var router = express.Router();

/* GET Albums data through iTunes API. */
router.get("/:query", async function (req, res, next) {
  const query = req.params.query;
  var apiUrl = `https://itunes.apple.com/search?term=${query}&entity=album`;
  var fetchResponse = await fetch(apiUrl);
  var json = await fetchResponse.json();
  res.json(json);
});

/* USE Show error message. */
router.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send("Something went wrong. Please, try again.");
});

module.exports = router;
