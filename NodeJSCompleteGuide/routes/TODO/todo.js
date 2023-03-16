const express = require('express');
const router = express.Router();

todoController = require('../../controllers/TODO/todo');

router.post('/todo/add', todoController.postInfo);
router.get('/todo/items', todoController.getToDoItemInfo);
router.get('/completed/items', todoController.getCompletedItemInfo);
router.delete('/completed/:deleId', todoController.completedItemInfo);
router.delete('/delete/:deleId', todoController.deleteInfo);

module.exports = router;