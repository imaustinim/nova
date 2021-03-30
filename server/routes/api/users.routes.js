const router = require("express").Router();
const usersCtrl = require("../../controllers/users.controllers");
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get("/", usersCtrl.show);
router.get("/getuser", usersCtrl.getUser);
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken)
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
// router.get("/:id", userCtrl.showUser);
// router.get("/:id/edit", authCtrl.ensureAuth, userCtrl.showEdit);
// router.post("/:id/submit", userCtrl.submitEdit);

module.exports = router;