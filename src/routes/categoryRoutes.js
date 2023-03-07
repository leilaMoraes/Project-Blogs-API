const express = require('express');

const categoryRouter = express.Router();

const { categoryController } = require('../controllers');
const tokenValidation = require('../middleware/tokenValidation');

categoryRouter.post('/', tokenValidation, categoryController.insertCategory);
categoryRouter.get('/', tokenValidation, categoryController.getCategories);

module.exports = categoryRouter;