const express = require('express');

const userRouter = express.Router();

const { userController } = require('../controllers');
const tokenValidation = require('../middleware/tokenValidation');
const { nameValidation,
    emailValidation,
    passwordValidation } = require('../middleware/userValidation');

userRouter
.post('/', nameValidation, emailValidation, passwordValidation, userController.insertUser);
userRouter.get('/', tokenValidation, userController.getUsers);
userRouter.get('/:id', tokenValidation, userController.getUser);

module.exports = userRouter;