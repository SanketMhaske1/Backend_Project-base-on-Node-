const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected To Database Successfully");
    })
    .catch((error) => {
      console.log("Error to Connect Databse", error);
      process.exit(1);
    });
};

module.exports = dbConnection;
