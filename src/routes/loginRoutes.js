const express = require('express');

const loginRouter = express.Router();

const { loginController } = require('../controllers');

loginRouter.post('/', loginController);

module.exports = loginRouter;