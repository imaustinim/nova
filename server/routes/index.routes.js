const router = require("express").Router();

router.get("/", (req, res) => {
    console.log("Redirected to HomePage");
});

module.exports = router;