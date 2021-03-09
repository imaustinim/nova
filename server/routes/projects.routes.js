const router = require("express").Router();

router.get("/", (req, res) => {
    console.log("Redirected to projects page");
});

module.exports = router;