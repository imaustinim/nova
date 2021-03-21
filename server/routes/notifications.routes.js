import express from "express"
const router = express.Router();
import NotificationsCtrl from "../controllers/notifications.controllers.js"

router.get("/", NotificationsCtrl.show);

export default router;
