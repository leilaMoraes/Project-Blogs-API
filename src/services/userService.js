const { User } = require('../models');

const OK = 200;
const CREATED = 201;

const insertUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
  if (newUser) return { type: CREATED };
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return { type: OK, message: users };
};

module.exports = { insertUser, getUsers };