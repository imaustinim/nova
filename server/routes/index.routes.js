import express from "express"
const router = express.Router();
import * as IndexCtrl from "../controllers/index.controllers.js" 

router.get("/", IndexCtrl.show);
router.get("/test", (req, res) => {
    res.render("")
});


export default router;