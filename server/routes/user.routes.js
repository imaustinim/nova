const router = require("express").Router();
const userCtrl = require("../controllers/user.controllers");
const authCtrl = require("../controllers/auth.controllers")

router.get("/", userCtrl.show);
router.get("/:id", userCtrl.showUser);
router.get("/:id/edit", authCtrl.ensureAuth, userCtrl.showEdit);
router.post("/:id/submit", userCtrl.submitEdit);


module.exports = router;