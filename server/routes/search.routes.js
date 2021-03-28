const router = require("express").Router();
const ctrl = require("../controllers/search.controllers")

router.post("/",  ctrl.search);


module.exports = router;