const { User } = require('../models');

const OK = 200;
const ERROR = 400;

module.exports = async (email, password) => {
  if (!email || !password) return { type: ERROR, message: 'Some required fields are missing' };
  const user = await User.findOne({ where: { email, password } });
  if (!user) return { type: ERROR, message: 'Invalid fields' };
  return { type: OK };
};