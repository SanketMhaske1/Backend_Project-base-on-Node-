const express = require("express");
const router = express.Router();

const { dummyPage } = require("../controller/dummy");
router.get("/dummy", dummyPage);

const { createComment } = require("../controller/commentController");
router.post("/comments/create", createComment);

const { createPost, getAllPost } = require("../controller/postController");
router.post("/post/create", createPost);
router.get("/getAllPost", getAllPost);

module.exports = router;
