const postsService = require('../services/postsService');

const getAll = async (req, res, next) => {
  try {
    const posts = await postsService.getAll();
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const post = await postsService.getById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post no encontrado' });
    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

const getByAuthorId = async (req, res, next) => {
  try {
    const posts = await postsService.getByAuthorId(req.params.authorId);
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const { title, content, author_id, published } = req.body;
    if (!title || !content || !author_id) {
      return res.status(400).json({ error: 'title, content y author_id son obligatorios' });
    }
    const post = await postsService.create({ title, content, author_id, published });
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { title, content, author_id, published } = req.body;
    if (!title || !content || !author_id) {
      return res.status(400).json({ error: 'title, content y author_id son obligatorios' });
    }
    const post = await postsService.update(req.params.id, { title, content, author_id, published });
    if (!post) return res.status(404).json({ error: 'Post no encontrado' });
    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const post = await postsService.remove(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post no encontrado' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getById, getByAuthorId, create, update, remove };