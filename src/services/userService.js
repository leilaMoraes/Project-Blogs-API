const { User } = require('../models');

const CREATED = 201;

const insertUser = async (name, email, password, image) => {
  const newUser = await User.create({ name, email, password, image });
  if (newUser) return { type: CREATED };
};

module.exports = { insertUser };