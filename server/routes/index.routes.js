import express from "express"
const router = express.Router();
import IndexCtrl from "../controllers/index.controllers.js" 

router.get("/", IndexCtrl.show);

export default router;