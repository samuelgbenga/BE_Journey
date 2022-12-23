const TodoModel = require("../models/TodoModel");

module.exports.getTodo = async (req, res) => {
  const todo = await TodoModel.find();
  res.send(todo);
};

module.exports.saveTodo = async (req, res) => {
  const { text } = await req.body;

  TodoModel.create({ text }).then((data) => {
    console.log("Added successfully...");
    res.send(data);
  });
};

module.exports.updateTodo = async (req, res) => {
  const { _id, text } = await req.body;

  TodoModel.findByIdAndUpdate(_id, { text })
    .then(() => {
      res.send("update successfully...");
    })
    .catch((err) => console.log(err));
};

module.exports.deleteTodo = async (req, res) => {
  const { _id } = await req.body;

  TodoModel.findByIdAndDelete(_id)
    .then(() => {
      res.send("Delete successfully...");
    })
    .catch((err) => console.log(err));
};
