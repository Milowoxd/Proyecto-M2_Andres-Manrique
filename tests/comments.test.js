const request = require('supertest');
const app = require('../src/app');

describe('COMMENTS endpoints', () => {

  test('GET /comments - retorna lista de comments', async () => {
    const res = await request(app).get('/comments');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /comments - crea un comment correctamente', async () => {
    const authorRes = await request(app)
      .post('/authors')
      .send({
        name: 'Author Comment',
        email: `comment${Date.now()}@example.com`
      });

    const postRes = await request(app)
      .post('/posts')
      .send({
        title: 'Post para comment',
        content: 'Contenido del post',
        author_id: authorRes.body.id
      });

    const res = await request(app)
      .post('/comments')
      .send({
        content: 'Este es un comentario de prueba',
        author_id: authorRes.body.id,
        post_id: postRes.body.id
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.content).toBe('Este es un comentario de prueba');
  });

  test('POST /comments - retorna 400 si falta content', async () => {
    const res = await request(app)
      .post('/comments')
      .send({ author_id: 1, post_id: 1 });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  test('POST /comments - retorna 400 si falta author_id', async () => {
    const res = await request(app)
      .post('/comments')
      .send({ content: 'Sin author', post_id: 1 });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  test('GET /comments/post/:postId - retorna comments de un post', async () => {
    const res = await request(app).get('/comments/post/1');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});