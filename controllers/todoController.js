const { Todo } = require("../models");

class TodoController {
  static findAll = async (req, res, next) => {
    try {
      const result = await Todo.findAll();
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  static findByPk = async (req, res, next) => {
    try {
      const id = req.params.id;
      const result = await Todo.findByPk(id);
      if (!result) {
        res.status(404).json({ message: "Id not found!" });
      }
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };

  static create = async (req, res, next) => {
    try {
      const { title, description } = req.body;
      if (!title || !description) {
        return res
          .status(400)
          .json({ message: "title and description are required!" });
      }
      let payload = {
        title,
        description,
      };
      const result = await Todo.create(payload);
      res.status(200).json({message: "todo created!"});
    } catch (err) {
      next(err);
    }
  };

  static destroy = async (req, res, next) => {
    try {
      const id = req.params.id;
      const result = await Todo.destroy({
        where: {
          id,
        },
      });
      if (!result) {
        res.status(404).json({ message: "Id not found!" });
      }
      res.status(200).json({ message: `todo deleted!` });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = TodoController

