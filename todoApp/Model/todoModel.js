const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    maxLength: 50,
  },
  description: {
    type: String,
    require: true,
    maxLength: 200,
  },
  currentState: {
    type: String,
    euum: ["Completed", "Started", "InProcess", "NotStarted"],
    require: true,
  },
  createdAt: {
    type: Date,
    require: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    require: true,
    default: Date.now(),
  },
});
module.exports = mongoose.model("todo", todoSchema);
