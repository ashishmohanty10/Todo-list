const express = require("express");
const dotenv = require("dotenv");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
const port = process.env.PORT || 3000;

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

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
    completed: false,
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find();
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsepayload = updateTodo.safeParse(updatePayload);

  if (!parsepayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });

    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(port, () => {
  console.log(`Server is up in port ${port}`);
});
