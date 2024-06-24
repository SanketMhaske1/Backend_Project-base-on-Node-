const express = require("express");
const app = express();

const dbConnection = require("./Config/databaseConnection");
dbConnection();

require("dotenv").config();
const port = process.env.PORT || 4000;

app.use(express.json());

const todoRoutes = require("./Routes/todos");

app.use("/api/v1", todoRoutes);

app.get("/", (req, res) => {
  res.send(`Welcome`);
});

app.listen(port, () => {
  console.log(`Server Strated At ${port}`);
});
