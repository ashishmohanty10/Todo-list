const mongoose = require("mongoose");
require("dotenv").config();

const dbURL = process.env.URL;
mongoose.connect(`${dbURL}`);
const todoSchema = mongoose.Schema({
  title: String,
  descriptoion: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo: todo,
};
