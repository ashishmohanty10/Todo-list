const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");

const app = express();

app.use(express.json());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
  }

  //put it in mongodb

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find();

  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatepayload = req.body;
  const parsedPayload = updatepayload.safeParse(updatepayload);

  if (!parsedPayload.success) {
    req.status(411).json({
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

app.listen(3000, function () {
  console.log("server is up");
});
