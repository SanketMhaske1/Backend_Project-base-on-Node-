const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  Name: {
    type: String,
    trim: true,
    require: true,
  },
  Email: {
    type: String,
    trim: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  tags: {
    type: String,
    trim: true,
  },
});

const File = mongoose.model("File", fileSchema);
module.exports = File;
