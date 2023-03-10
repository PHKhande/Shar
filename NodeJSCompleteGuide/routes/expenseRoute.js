const express = require('express');
const router = express.Router();

const expenseController = require('../controllers/expenseController');

router.get('/expenses', expenseController.getExpenseInfo);

router.post('/expense/add', expenseController.postExpenseInfo);

router.delete('/expense/:deleId', expenseController.deleteExpense);

module.exports = router;