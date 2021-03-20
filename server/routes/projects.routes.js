const router = require("express").Router();
const projectsCtrl = require("../controllers/projects.controllers");
const upload = require("./upload");

router.get("/", projectsCtrl.show);
router.get("/create", projectsCtrl.showCreateForm);
router.post("/submit", upload.single("image"), projectsCtrl.submitCreateForm);
router.get("/:id", projectsCtrl.showProject);

module.exports = router;