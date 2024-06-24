const express = require("express");
const router = express.Router();

const { createTodo } = require("../Controller/createTodo");
router.post("/createTodo", createTodo);

const { getAllTodo, getTodoByID } = require("../Controller/getAllTodos");
router.get("/getAllTodo", getAllTodo);
router.get("/getTodoByID/:id", getTodoByID);

const { updateTodo } = require("../Controller/updateTodo");
router.put("/updateTodo/:id", updateTodo);

const { deletTodo } = require("../Controller/deleteTodo");
router.delete("/deletTodo/:id", deletTodo);

module.exports = router;
