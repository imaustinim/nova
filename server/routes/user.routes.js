import express from "express"
const router = express.Router();
import UserCtrl from "../controllers/users.controllers.js"
import AuthCtrl from "../controllers/auth.controllers.js"

router.get("/", UserCtrl.show);
router.get("/:id", UserCtrl.showUser);
router.get("/:id/edit", AuthCtrl.ensureAuth, UserCtrl.showEdit);
router.post("/:id/submit", UserCtrl.submitEdit);


export default router;