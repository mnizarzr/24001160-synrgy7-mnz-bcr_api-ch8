import request from 'supertest';
import createServer from '../src/app';
import { Model } from 'objection';
import knexInstance from '../src/config/db';
import { Express } from 'express'

describe('/api/auth endpoints', () => {

    let app: Express | null

    const user = {
        name: "orang biasa",
        username: "orangtidakbiasa",
        password: "biasa231"
    };

    beforeEach(() => {
        app = createServer();
    })

    afterEach(() => {
        app = null
    })

    beforeAll(async () => {
        Model.knex(knexInstance);
        const existingUser = await knexInstance('users').where('username', user.username).first();
        if (existingUser) {
            await knexInstance('users').where('username', user.username).del();
        }
    });

    afterAll(async () => {
        await knexInstance.destroy();
    });

    describe('POST /api/auth/register', () => {
        it('should register a new user', async () => {
            const response = await request(app!)
                .post('/api/auth/register')
                .send({
                    name: user.name,
                    username: user.username,
                    password: user.password,
                })
                .expect(201);

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('message', 'success');
            expect(response.body).toHaveProperty('user');
            expect(response.body.user.id).toBeDefined();
        });
    });

    describe('POST /api/auth/login', () => {
        it('should log in an existing user', async () => {
            const response = await request(app!)
                .post('/api/auth/login')
                .send({
                    username: user.username,
                    password: user.password,
                });

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('message', 'success');
            expect(response.body.token).toBeDefined();
        });
    });
});
