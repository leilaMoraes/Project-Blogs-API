const { BlogPost, User, Category } = require('../models');

const OK = 200;
const CREATED = 201;
const ERROR = 400;
const NOT_FOUND = 404;
const MESSAGE = { message: 'Post does not exist' };
const MESSAGE2 = { message: 'Some required fields are missing' };

const insertPost = async (title, content, categoryIds) => {
  if (!title || !content || !categoryIds) return { type: ERROR, message: MESSAGE2 };
  const newPost = await BlogPost.create({ title, content, categoryIds: [categoryIds] });
  return { type: CREATED, message: newPost };
};

const getPosts = async () => {
  const posts = await BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } }] });
  return { type: OK, message: posts };
};

const getPost = async (id) => {
  const post = await BlogPost.findByPk(id, { include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } }] });
  if (!post) return { type: NOT_FOUND, message: MESSAGE };
  return { type: OK, message: post };
};

module.exports = { insertPost, getPosts, getPost };