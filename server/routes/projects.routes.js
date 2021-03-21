import express from "express"
const router = express.Router();
import ProjectsCtrl from "../controllers/projects.controllers.js"
import upload from "./upload.js"

router.get("/", ProjectsCtrl.show);
router.get("/create", ProjectsCtrl.showCreateForm);
router.post("/submit", upload.single("image"), ProjectsCtrl.submitCreateForm);
router.get("/:id", ProjectsCtrl.showProject);

export default router;