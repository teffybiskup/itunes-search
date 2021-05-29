var express = require("express");
var fetch = require("node-fetch");
var router = express.Router();

/* GET Albums data through iTunes API. */
router.get("/:query", async function (req, res, next) {
  const query = req.params.query;
  var apiUrl = `https://itunes.apple.com/search?term=${query}&entity=album&attribute=allArtistTerm`;
  var fetchResponse = await fetch(apiUrl);
  var json = await fetchResponse.json();

  json.results = json.results
    .reduce((acc, currentObject) => {
      if(!acc.find(object => object['collectionName'] === currentObject['collectionName'])) {
        acc.push(currentObject);
      }
      return acc;
    }, [])
  json.resultCount = json.results.length;

  res.json(json);
});

/* USE Show error message. */
router.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send("Something went wrong. Please, try again.");
});

module.exports = router;
