import request from 'supertest';
import app from '../app';

describe('GET /api', () => {
  it('should return a success message', async () => {
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual('The CI/CD WORKS! finally!');
  });
});