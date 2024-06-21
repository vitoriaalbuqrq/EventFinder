const router = require("express").Router();

//Event router
const EventRouter = require("./events");
router.use("/", EventRouter);

module.exports = router;
