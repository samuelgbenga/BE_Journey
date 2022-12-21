const TodoModel = require("../models/TodoModel");

module.exports.getTodo = async (req, res) => {
  const todo = await TodoModel;
  res.send(todo);
};

module.exports.saveTodo = async (req, res) => {
  const { text } = await req.body;

  TodoModel.create({ text }).then((data) => {
    console.log("Added successfully...");
    console.log(data);
    res.send(data);
  });
};
