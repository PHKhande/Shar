const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/users', userController.getUserInfo);

router.post('/user/add', userController.postUserInfo);

router.delete('/user/:deleId', userController.deleteUser);

module.exports = router;