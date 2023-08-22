require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8010;
const router = require("./routes/todo");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todo", router);

if (process.env.NODE_ENV != "test") {
  app.listen(port, () => {
    console.log(`App listening on ${port}`);
  });
}

module.exports = app;
