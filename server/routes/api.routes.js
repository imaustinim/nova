const router = require("express").Router();
const UsersRouter = require("./users.routes");

router.use("/users", UsersRouter);

module.exports = router;