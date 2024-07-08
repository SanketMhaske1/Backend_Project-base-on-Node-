const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected To Database Successfully");
    })
    .catch((error) => {
      console.log("Not Able To Connect To DataBase", error);
      process.exit(1);
    });
};
