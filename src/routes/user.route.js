const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/user.controller')

userRouter.post('/register', userController.registerUser)
userRouter.post('/login', userController.loginUser)
userRouter.get('/:id', userController.userProfile)

module.exports = userRouter;