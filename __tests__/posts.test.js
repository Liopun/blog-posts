const app  = require("../app"),
      request = require("supertest");

describe("HATCHWAY - Backend - /api/posts", () => {
    test("Should return 400 and error when tags query string is missing", async () => {
        const res = await request(app).get("/api/posts?sortBy=id&direction=asc");
        expect(res.body.error).toBe("Tags parameter is required")
        expect(res.status).toBe(400);
    }, 10000);

    test("Should return 400 and error when sortBy in query string is invalid", async () => {
        const res = await request(app).get("/api/posts?tags=tech&sortBy=ids&direction=asc");
        expect(res.body.error).toBe("sortBy parameter is invalid")
        expect(res.status).toBe(400);
    }, 10000);

    test("Should return 400 and error when direction in query string is invalid", async () => {
        const res = await request(app).get("/api/posts?tags=tech&sortBy=id&direction=ascs");
        expect(res.body.error).toBe("Direction parameter is invalid")
        expect(res.status).toBe(400);
    }, 10000);

    test("Should return the correct status when query string is complete | single tag", async () => {
        const res = await request(app).get("/api/posts?tags=tech&sortBy=id&direction=asc");
        expect(res.status).toBe(200);
    }, 10000);

    test("Should return the correct status when query string is complete | multiple tags", async () => {
        const res = await request(app).get("/api/posts?tags=tech,science&sortBy=id&direction=asc");
        expect(res.status).toBe(200);
    }, 10000);
});