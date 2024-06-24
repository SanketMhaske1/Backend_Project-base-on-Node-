const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Database Connection Succesfull`);
    })
    .catch((error) => {
      console.log("Database connection error", err);
      process.exit(1);
    });
};

module.exports = dbConnection;
