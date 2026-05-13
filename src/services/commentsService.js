const pool = require('../db/pool');

const getAll = async () => {
  const result = await pool.query(`
    SELECT comments.*, 
      authors.name as author_name,
      posts.title as post_title
    FROM comments
    JOIN authors ON comments.author_id = authors.id
    JOIN posts ON comments.post_id = posts.id
    ORDER BY comments.id
  `);
  return result.rows;
};

const getByPostId = async (postId) => {
  const result = await pool.query(`
    SELECT comments.*, 
      authors.name as author_name
    FROM comments
    JOIN authors ON comments.author_id = authors.id
    WHERE comments.post_id = $1
    ORDER BY comments.id
  `, [postId]);
  return result.rows;
};

const create = async ({ content, author_id, post_id }) => {
  const result = await pool.query(
    'INSERT INTO comments (content, author_id, post_id) VALUES ($1, $2, $3) RETURNING *',
    [content, author_id, post_id]
  );
  return result.rows[0];
};

module.exports = { getAll, getByPostId, create };