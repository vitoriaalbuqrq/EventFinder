const router = require("express").Router();
const eventController = require("../controllers/EventController");
const upload = require("../middleware/upload");

router.route("/events")
    .post(upload.single("imgEvent"), (req, res) => eventController.create(req, res));

router.route("/events")
    .get((req, res) => eventController.getAll(req, res));

router.route("/event/:id")
    .get((req, res) => eventController.get(req, res));

router.route("/event/:id")
    .delete((req, res) => eventController.delete(req, res));

router.route("/event/:id")
    .put(upload.single("imgEvent"), (req, res) => eventController.update(req, res));

module.exports = router;