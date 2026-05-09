const express = require('express');
const app = express();

app.use(express.json());

// Rutas
const authorsRouter = require('./routes/authors');
const postsRouter = require('./routes/posts');

app.use('/authors', authorsRouter);
app.use('/posts', postsRouter);

// Middleware de errores
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

module.exports = app;