const { loginService } = require('../services');

const createToken = require('../auth/authToken');

module.exports = async (req, res) => {
  try {
  const { email, password } = req.body;
  const { type, message } = await loginService(email, password);
  if (type === 200) {
    const token = createToken.createToken(email);
    return res.status(type).json({ token });
  } return res.status(type).json({ message });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};