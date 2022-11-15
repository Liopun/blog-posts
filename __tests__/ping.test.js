const app  = require("../app"),
      request = require("supertest");

describe("HATCHWAY - Backend - /api/ping", () => {
    test("Should return the correct body success", async () => {
        const res = await request(app).get("/api/ping");
        expect(res.body.success).toBe(true);
    }, 10000);

    test("Should return the correct status for /api/ping endpoint", async () => {
        const res = await request(app).get("/api/ping");
        expect(res.statusCode).toBe(200);
    }, 10000);

    test("Should return the correct status for incorrect endpoint", async () => {
        const res = await request(app).get("/api/pingme");
        expect(res.statusCode).toBe(404); 
    }, 10000);
});