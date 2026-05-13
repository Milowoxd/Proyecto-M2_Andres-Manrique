const commentsService = require('../services/commentsService');

const getAll = async (req, res, next) => {
  try {
    const comments = await commentsService.getAll();
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};

const getByPostId = async (req, res, next) => {
  try {
    const comments = await commentsService.getByPostId(req.params.postId);
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const { content, author_id, post_id } = req.body;
    if (!content || !author_id || !post_id) {
      return res.status(400).json({ error: 'content, author_id y post_id son obligatorios' });
    }
    const comment = await commentsService.create({ content, author_id, post_id });
    res.status(201).json(comment);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getByPostId, create };