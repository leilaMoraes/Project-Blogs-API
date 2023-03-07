const { categoryService } = require('../services');

const insertCategory = async (req, res) => {
  try {
  const { name } = req.body;
  const { type, message } = await categoryService.insertCategory(name);
  return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getCategories = async (_req, res) => {
  try {
    const { type, message } = await categoryService.getCategories();
    return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { insertCategory, getCategories };