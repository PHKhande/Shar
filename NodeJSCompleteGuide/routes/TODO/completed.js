const express = require('express');
const router = express.Router();

todoController = require('../../controllers/TODO/todo');

router.post('todo/add/add', todoController.postInfo);
router.get('todo/sub', todoController.postInfo)

exports.router;