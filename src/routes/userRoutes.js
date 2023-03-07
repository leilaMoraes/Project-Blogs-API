const express = require('express');

const userRouter = express.Router();

const { userController } = require('../controllers');
const { nameValidation,
    emailValidation,
    passwordValidation } = require('../middleware/userValidation');

userRouter
.post('/', nameValidation, emailValidation, passwordValidation, userController.insertUser);

module.exports = userRouter;