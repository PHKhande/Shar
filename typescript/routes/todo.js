"use strict";
// import fs from 'fs';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
// const TODO_FILE_PATH = '../todos.json';
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    console.log(todos);
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(200).json({ message: "Added ToDo", todo: todos });
});
router.put('/todo/:todoId', (req, res) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        res.status(200).json({ message: "updated ToDo", todo: todos[todoIndex] });
    }
    else {
        res.status(404).json({ message: "No Todo" });
    }
});
router.delete('/todo/:todoId', (req, res) => {
    const tid = req.params.todoId;
    todos = todos.filter(item => item.id !== tid);
    res.status(200).json({ message: "updated ToDo", todo: todos });
});
// const appendTodosToFile = (todos: Todo[]): void => {
//     fs.writeFileSync(TODO_FILE_PATH, JSON.stringify(todos));
// };
// const readTodosFromFile = (): Todo[] => {
//     try {
//       const data = fs.readFileSync(TODO_FILE_PATH, "utf-8");
//       return JSON.parse(data);
//     } catch (error) {
//       console.error("Error reading todos file:", error);
//       return [];
//     }
//   };
exports.default = router;
