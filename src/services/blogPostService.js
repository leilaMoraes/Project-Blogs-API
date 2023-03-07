const { BlogPost, User, Category } = require('../models');

const OK = 200;

const getPosts = async () => {
  const posts = await BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } }] });
  return { type: OK, message: posts };
};

module.exports = { getPosts };