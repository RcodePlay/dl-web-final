import supertest from 'supertest';
import server from '../index';
import { logger } from '../infrasrtucture/logger';

const reqWithSupertest = supertest(server);

describe('GET "/"', () => {
    test('GET "/" returns all events', async () => {
        const res = await reqWithSupertest.get('/events');
        expect(res.status).toEqual(200);
    });
});
