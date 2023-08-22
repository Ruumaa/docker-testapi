const { Todo } = require("../controllers/todoController");
const app = require("../app");
const request = require("supertest");

test("res.status should be 200", (done) => {
  request(app)
    .get("/api/todo")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.length).toBe(3);
      done();
    })
    .catch(done);
});

// test("GET /api/todo/:id", async () => {
//   const id = 1;
//   const response = await request(app).get(`/api/todo/${id}`);
//   console.log("Response status : ", response.status);
//   console.log("Response body : ", response.body);
//   expect(response.status).toBe(200);
// });

// test("POST /api/todo", (done) => {
//   const payload = {
//     title: "Ibadah",
//     description: "mendapatkan hidayah dan ketenangan dari pusat",
//   };
//   request(app)
//     .post("/api/todo")
//     .send(payload)
//     .expect("Content-Type", /json/)
//     .expect(200)
//     .end((err, response) => {
//       if (err) {
//         return done(err);
//       }
//       expect(response.body.message).toBe("todo created!");
//       done();
//     });
// });

// test("DELETE /api/todo/:id", (done) => {
//   request(app)
//     .delete("/api/todo/9")
//     .expect("Content-Type", /json/)
//     .expect(200)
//     .then((response) => {
//       expect(response.body.message).toBe("todo deleted!");
//       done()
//     })
//     .catch(done)
// });
