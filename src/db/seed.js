const pool = require('./pool');

const seed = async () => {
  await pool.query(`
    INSERT INTO authors (name, email, bio) VALUES
      ('Ana García', 'ana@example.com', 'Desarrolladora full-stack apasionada por Node.js'),
      ('Carlos Ruiz', 'carlos@example.com', 'Escritor técnico especializado en bases de datos'),
      ('María López', 'maria@example.com', 'Ingeniera de software con foco en APIs REST')
    ON CONFLICT (email) DO NOTHING
  `);

  await pool.query(`
    INSERT INTO posts (title, content, author_id, published) VALUES
      ('Introducción a Node.js', 'Node.js es un runtime de JavaScript...', 1, true),
      ('PostgreSQL vs MySQL', 'Ambas bases de datos tienen ventajas...', 2, true),
      ('APIs RESTful', 'REST es un estilo arquitectónico...', 1, true),
      ('Manejo de errores en Express', 'El manejo apropiado de errores...', 3, false),
      ('Async/Await explicado', 'Las promesas simplifican el código asíncrono...', 1, false)
    ON CONFLICT DO NOTHING
  `);

  console.log('✅ Datos de prueba insertados');
  process.exit(0);
};

seed().catch((err) => {
  console.error('❌ Error insertando datos:', err.message);
  process.exit(1);
});