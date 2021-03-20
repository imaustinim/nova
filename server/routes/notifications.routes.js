const router = require("express").Router();
const notificationsCtrl = require("../controllers/notifications.controllers")

router.get("/", notificationsCtrl.show);

module.exports = router;