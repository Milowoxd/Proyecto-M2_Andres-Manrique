const pool = require('./pool');

const createTables = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS authors (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      bio TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      title VARCHAR(200) NOT NULL,
      content TEXT NOT NULL,
      author_id INTEGER NOT NULL,
      published BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE CASCADE
    )
  `);

  console.log('✅ Tablas creadas correctamente');
  process.exit(0);
};

createTables().catch((err) => {
  console.error('❌ Error creando tablas:', err.message);
  process.exit(1);
});