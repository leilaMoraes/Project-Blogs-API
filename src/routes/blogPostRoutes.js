const express = require('express');

const postRouter = express.Router();

const { blogPostController } = require('../controllers');
const tokenValidation = require('../middleware/tokenValidation');

postRouter.get('/', tokenValidation, blogPostController.getPosts);

module.exports = postRouter;