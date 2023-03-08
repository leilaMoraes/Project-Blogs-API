const { userService } = require('../services');

const createToken = require('../auth/authToken');
const { verifyToken } = require('../auth/authToken');

const insertUser = async (req, res) => {
  try {
  const { displayName, email, password, image } = req.body;
  const { type } = await userService.insertUser(displayName, email, password, image);
  if (type) {
    const token = createToken.createToken(email);
    return res.status(type).json({ token });
  }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUsers = async (_req, res) => {
  try {
    const { type, message } = await userService.getUsers();
    return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, message } = await userService.getUser(id);
    return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUserByToken = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const decoded = verifyToken(authorization);
    const { email } = decoded;
    await userService.deleteUserByToken(email);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { insertUser, getUsers, getUser, deleteUserByToken };