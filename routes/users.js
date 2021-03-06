var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, username: "sombone"},
    {id: 2, username: "somboneadsf"},
    {id: 3, username: "sombonea"},
  ])
});

module.exports = router;
