import express from "express"
const router = express.Router();
import SearchCtrl from "../controllers/search.controllers.js"

router.post("/",  SearchCtrl.search);

export default router;