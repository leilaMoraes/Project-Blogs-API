const { User } = require('../models');

const OK = 200;
const CREATED = 201;
const NOT_FOUND = 404;
const MESSAGE = { message: 'User does not exist' };

const insertUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
  if (newUser) return { type: CREATED };
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return { type: OK, message: users };
};

const getUser = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: 'password' } });
  if (!user) return { type: NOT_FOUND, message: MESSAGE };
  return { type: OK, message: user };
};

module.exports = { insertUser, getUsers, getUser };