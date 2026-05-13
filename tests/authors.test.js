const request = require('supertest');
const app = require('../src/app');

describe('AUTHORS endpoints', () => {
  
  test('GET /authors - retorna lista de authors', async () => {
    const res = await request(app).get('/authors');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /authors/:id - retorna 404 si no existe', async () => {
    const res = await request(app).get('/authors/99999');
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error');
  });

  test('POST /authors - crea un author correctamente', async () => {
    const res = await request(app)
      .post('/authors')
      .send({
        name: 'Test Author',
        email: `test${Date.now()}@example.com`,
        bio: 'Bio de prueba'
      });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Test Author');
  });

  test('POST /authors - retorna 400 si falta name', async () => {
    const res = await request(app)
      .post('/authors')
      .send({ email: 'falta@nombre.com' });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  test('POST /authors - retorna 400 si email ya existe', async () => {
    const email = `duplicado${Date.now()}@example.com`;
    await request(app).post('/authors').send({ name: 'Primero', email });
    const res = await request(app).post('/authors').send({ name: 'Segundo', email });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  test('DELETE /authors/:id - retorna 404 si no existe', async () => {
    const res = await request(app).delete('/authors/99999');
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error');
  });

});