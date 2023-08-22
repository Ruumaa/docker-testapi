const express = require("express");
const TodoController = require("../controllers/todoController");
const router = express.Router();

router.get("/", TodoController.findAll);
router.get("/:id", TodoController.findByPk);
router.post("/", TodoController.create);
router.delete('/:id', TodoController.destroy)

module.exports = router;
