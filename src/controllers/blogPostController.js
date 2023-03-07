const { blogPostService } = require('../services');

const getPosts = async (_req, res) => {
  try {
    const { type, message } = await blogPostService.getPosts();
    return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, message } = await blogPostService.getPost(id);
    return res.status(type).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getPosts, getPost };