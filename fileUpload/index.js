const express = require("express");
require("dotenv").config;
const { connect } = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileupload = require("express-fileupload");

const app = express();
const port = process.env.PORT || 4000;
connect();
cloudinaryConnect();
app.use(express.json());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.get("/", (req, res) => {
  res.send("welcome");
});

const Upload = require("./router/FileUpload");
app.use("/api/v1/upoad", Upload);

app.listen(port, () => {
  console.log(`Server Started At ${port}`);
});
