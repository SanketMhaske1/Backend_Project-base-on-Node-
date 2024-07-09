const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: true,
  },
  email: {
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
