import express from "express"
const router = express.Router();
import usersRouter from "./users.routes.js";
import projectsRouter from "./projects.routes.js";
import searchRouter from "./notifications.routes.js";
import notificationsRouter from "./search.routes.js";

router.use("/users", usersRouter);
router.use("/projects", projectsRouter);
router.use("/search", searchRouter);
router.use("/notifications", notificationsRouter);

export default router;