const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '3d',
};

const createToken = (email) => jwt.sign({ email }, secret, JWT_CONFIG);

module.exports = { createToken };