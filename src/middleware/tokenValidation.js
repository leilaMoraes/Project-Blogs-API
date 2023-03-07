const { verifyToken } = require('../auth/authToken');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const validToken = verifyToken(authorization);
    if (!validToken) return res.status(401).json({ message: 'Expired or invalid token' });
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};