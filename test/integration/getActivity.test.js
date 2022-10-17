import supertest from 'supertest';
import app from  '../../src/app.mjs';

describe('get activity', () => {
  test('expect to get status 200 if returned data is ok', async () => {
    const resp = await supertest(app).get('/activity');
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toMatchObject(
      expect.objectContaining({
        activity: expect.any(String),
        type: expect.any(String),
        participants: expect.any(Number),
        link: expect.any(String),
        key: expect.any(String),
        accessibility: expect.any(String),
        price: expect.any(String),
      }),
    );
  });

  test('expect to get status 500 if returned data is not matched schema', async () => {
    const resp = await supertest(app).get('/activity');
    expect(resp.statusCode).toBe(500);
  });

  test('expect to get status 404 if route is not exist', async () => {
    const resp = await supertest(app).get('/somepath');
    expect(resp.statusCode).toBe(404);
  });
});
