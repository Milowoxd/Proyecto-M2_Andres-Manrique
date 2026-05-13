const request = require('supertest');
const app = require('../src/app');

describe('POSTS endpoints', () => {

  test('GET /posts - retorna lista de posts', async () => {
    const res = await request(app).get('/posts');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /posts/:id - retorna 404 si no existe', async () => {
    const res = await request(app).get('/posts/99999');
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error');
  });

  test('POST /posts - crea un post correctamente', async () => {
    const authorRes = await request(app)
      .post('/authors')
      .send({
        name: 'Author Para Post',
        email: `authorpost${Date.now()}@example.com`
      });
    
    const res = await request(app)
      .post('/posts')
      .send({
        title: 'Post de prueba',
        content: 'Contenido de prueba',
        author_id: authorRes.body.id,
        published: false
      });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Post de prueba');
  });

  test('POST /posts - retorna 400 si falta title', async () => {
    const res = await request(app)
      .post('/posts')
      .send({ content: 'Sin titulo', author_id: 1 });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  test('POST /posts - retorna 400 si falta author_id', async () => {
    const res = await request(app)
      .post('/posts')
      .send({ title: 'Sin author', content: 'Contenido' });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  test('DELETE /posts/:id - retorna 404 si no existe', async () => {
    const res = await request(app).delete('/posts/99999');
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error');
  });

});