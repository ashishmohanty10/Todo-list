const express = require("express");
const dotenv = require("dotenv");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

dotenv.config();
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeparse(createPayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent a wrong inputs",
    });

    return;
  }
  //put it in mongo db

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
  });
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsepayload = updateTodo.safeparse(updatePayload);

  if (!parsepayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });

    return;
  }
});

app.listen(port, () => {
  console.log(`Server is up in port ${port}`);
});
