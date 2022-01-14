const express = require("express");
const router = express.Router();

const TaskController = require("../controller/TaskController");

router.post("/", TaskController.create);
router.put("/:id", TaskController.update);
router.get("/:id", TaskController.show);
router.delete("/:id", TaskController.delete);

router.get("/filter/all/", TaskController.all);
router.get("/filter/favorite/", TaskController.favorite);

module.exports = router;
