const express = require('express');

const postRouter = express.Router();

const { blogPostController } = require('../controllers');
const tokenValidation = require('../middleware/tokenValidation');

postRouter.post('/', tokenValidation, blogPostController.insertPost);
postRouter.get('/', tokenValidation, blogPostController.getPosts);
postRouter.get('/:id', tokenValidation, blogPostController.getPost);

module.exports = postRouter;