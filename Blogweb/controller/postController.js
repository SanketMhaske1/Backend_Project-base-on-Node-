const Post = require("../Model/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const postObj = new Post({
      title,
      body,
    });
    const savePost = await postObj.save();

    res.json({
      post: savePost,
    });
  } catch (error) {
    return res.status(400).json({
      error: "error while creating",
    });
  }
};

exports.getAllPost = async (req, res) => {
  try {
    const post = Post.find().populate("likes").populate("comments").exec();
    res.json({
      post,
    });
  } catch (error) {
    return res.status(400).json({
      error: "error while creating",
    });
  }
};
