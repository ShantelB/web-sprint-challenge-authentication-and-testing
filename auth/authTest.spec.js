const db = require('../database/dbConfig');
const user = require('./auth-model.js');
const request = require('supertest');
const server = require('../api/server');


describe('server.js', () => {
    describe('index route', () => {
        it('should return an OK status code from the index route', async () => {
          const expectedStatusCode = 200;
          const response = await request(server).get('/');
          expect(response.status).toEqual(expectedStatusCode);
        });
       });
     });

     describe("register user", () => {
        // it('returns 201 CREATED', async () => {
        //     const data = {username: "Hellos", password:"test"}
        //     const res = await request(server)
        //     .post("/api/auth/register")
        //     .send(data)
        //     expect(res.statusCode).toBe(201);
        // })
        it("should return JSON", async () => {
            const res = await request(server)
              .post("/api/auth/register")
              .send({username: "Hello"});
            expect(res.type).toMatch(/json/i);
          });
    })

describe("login user", () => {
        it('returns 200 login', async () => {
            const data = {username: "Shantel", password:"test"}
            const res = await request(server)
            .post("/api/auth/login")
            .send(data)
            expect(res.statusCode).toBe(200);
        })
        it("should return JSON", async () => {
            const res = await request(server)
              .post("/api/auth/login")
              .send({username: "Shantel"});
            expect(res.type).toMatch(/json/i);
          });
    })

    describe('Not authorized to get jokes', () => {
          it('should return an 401 status code if user is not logged in', async () => {
            const expectedStatusCode = 401;
            const response = await request(server).get('/api/jokes');
            expect(response.status).toEqual(expectedStatusCode);
          });
       });

     