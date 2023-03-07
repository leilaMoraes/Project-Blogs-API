const { User } = require('../models');

const CREATED = 201;

const insertUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
  if (newUser) return { type: CREATED };
};

module.exports = { insertUser };