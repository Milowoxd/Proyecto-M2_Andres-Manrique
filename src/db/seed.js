const pool = require('./pool');

const seed = async () => {
  await pool.query(`
    INSERT INTO authors (name, email, bio) VALUES
      ('Andres Manrique', 'andres@miniblog.com', 'Developer junior en DevSpark'),
      ('Sofia Torres', 'sofia@miniblog.com', 'Diseñadora UX apasionada por el código'),
      ('María López', 'maria@example.com', 'Ingeniera de software con foco en APIs REST')
    ON CONFLICT (email) DO NOTHING
  `);

  await pool.query(`
    INSERT INTO posts (title, content, author_id, published) VALUES
      ('Introducción a Node.js', 'Node.js me voló la cabeza cuando lo descubrí. Poder usar JavaScript en el backend cambió completamente cómo pienso el desarrollo web.', 1, true),
      ('PostgreSQL vs MySQL', 'Después de trabajar con ambas, PostgreSQL ganó mi corazón. Su manejo de tipos de datos y las foreign keys hacen todo más ordenado.', 2, true),
      ('APIs RESTful', 'Construir una API REST desde cero te enseña más que cualquier tutorial. Entiendes por qué cada decisión importa cuando alguien más tiene que consumirla.', 1, true),
      ('Manejo de errores en Express', 'Nadie habla de esto al principio pero el manejo de errores es lo que separa una API amateur de una profesional. Un buen middleware de errores te salva la vida.', 3, false),
      ('Async/Await explicado', 'Cuando entendí async/await fue como si todo hiciera clic. Ya no más callbacks anidados ni cadenas de .then() interminables. El código se lee como si fuera síncrono.', 1, false)
    ON CONFLICT DO NOTHING
  `);

  console.log('✅ Datos de prueba insertados');
  process.exit(0);
};

seed().catch((err) => {
  console.error('❌ Error insertando datos:', err.message);
  process.exit(1);
});