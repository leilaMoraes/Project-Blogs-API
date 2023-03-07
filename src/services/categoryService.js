const { Category } = require('../models');

const CREATED = 201;
const ERROR = 400;
const MESSAGE = { message: '"name" is required' };

const insertCategory = async (name) => {
  if (!name) return { type: ERROR, message: MESSAGE };
  const newCategory = await Category.create({ name });
  return { type: CREATED, message: newCategory };
};

module.exports = { insertCategory };