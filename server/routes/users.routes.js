const router = require("express").Router();

router.get("/", (req, res) => {
    console.log("Redirected to Users Page");
});

module.exports = router;