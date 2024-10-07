import supertest from 'supertest';
import server from '../index';
import { logger } from '../infrasrtucture/logger';

describe('GET "/events"', () => {
    it('should return all events', async () => {
        return supertest(server)
            .get('/events')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.statusCode).toBe(200);
            });
    });
});
