const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", //Reference To PostModel
  },
  user: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Like", likeSchema);
