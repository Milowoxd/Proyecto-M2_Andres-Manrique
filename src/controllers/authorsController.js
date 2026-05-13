const authorsService = require('../services/authorsService');

const getAll = async (req, res, next) => {
  try {
    const authors = await authorsService.getAll();
    res.status(200).json(authors);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const author = await authorsService.getById(req.params.id);
    if (!author) return res.status(404).json({ error: 'Author no encontrado' });
    res.status(200).json(author);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const { name, email, bio } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'name y email son obligatorios' });
    }
    const author = await authorsService.create({ name, email, bio });
    res.status(201).json(author);
  } catch (err) {
    if (err.code === '23505') {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { name, email, bio } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'name y email son obligatorios' });
    }
    const author = await authorsService.update(req.params.id, { name, email, bio });
    if (!author) return res.status(404).json({ error: 'Author no encontrado' });
    res.status(200).json(author);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const author = await authorsService.remove(req.params.id);
    if (!author) return res.status(404).json({ error: 'Author no encontrado' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getById, create, update, remove };