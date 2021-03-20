const router = require("express").Router();
const ctrl = require("../controllers/index.controllers")

router.get("/", ctrl.show);

module.exports = router;