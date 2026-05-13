const pool = require('../db/pool');

const getAll = async () => {
  const result = await pool.query('SELECT * FROM posts ORDER BY id');
  return result.rows;
};

const getById = async (id) => {
  const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
  return result.rows[0];
};

const getByAuthorId = async (authorId) => {
  const result = await pool.query(`
    SELECT posts.*, authors.name as author_name, authors.email as author_email, authors.bio as author_bio
    FROM posts
    JOIN authors ON posts.author_id = authors.id
    WHERE posts.author_id = $1
    ORDER BY posts.id
  `, [authorId]);
  return result.rows;
};

const create = async ({ title, content, author_id, published }) => {
  const result = await pool.query(
    'INSERT INTO posts (title, content, author_id, published) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, content, author_id, published || false]
  );
  return result.rows[0];
};

const update = async (id, { title, content, author_id, published }) => {
  const result = await pool.query(
    'UPDATE posts SET title = $1, content = $2, author_id = $3, published = $4 WHERE id = $5 RETURNING *',
    [title, content, author_id, published, id]
  );
  return result.rows[0];
};

const remove = async (id) => {
  const result = await pool.query(
    'DELETE FROM posts WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0];
};

module.exports = { getAll, getById, getByAuthorId, create, update, remove };