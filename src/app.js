const express = require('express');
const app = express();

app.use(express.json());

const authorsRouter = require('./routes/authors');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');

app.use('/authors', authorsRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);

const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

module.exports = app;