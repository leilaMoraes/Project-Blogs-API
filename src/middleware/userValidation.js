const { User } = require('../models');

const nameValidation = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res
    .status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  return next();
};

const emailValidation = async (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
  if (!emailRegex.test(email)) {
    return res
    .status(400)
    .json({ message: '"email" must be a valid email' });
  }
  const userRegistered = await User.findOne({ where: { email } });
  if (userRegistered) return res.status(409).json({ message: 'User already registered' });
  return next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res
    .status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }
  return next();
};

module.exports = { nameValidation, emailValidation, passwordValidation };