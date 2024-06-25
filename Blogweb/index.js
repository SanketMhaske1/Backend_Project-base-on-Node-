const express = require("express");
const app = express();

require("dotenv").config();
const Port = 4001;

const dbConnection = require("./Config/databaseConnection");
dbConnection();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Welcome</h1>`);
});

const blog = require("./router/blog");
app.use("/api/v1", blog);

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(Port, () => {
  console.log(`Server Started At ${Port}`);
});
