const { Category } = require('../models');

const OK = 200;
const CREATED = 201;
const ERROR = 400;
const MESSAGE = { message: '"name" is required' };

const insertCategory = async (name) => {
  if (!name) return { type: ERROR, message: MESSAGE };
  const newCategory = await Category.create({ name });
  return { type: CREATED, message: newCategory };
};

const getCategories = async () => {
  const categories = await Category.findAll();
  return { type: OK, message: categories };
};

module.exports = { insertCategory, getCategories };