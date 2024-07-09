const express = require("express");
const router = express.Router();

const {
  loacalFileUpload,
  imageUpload,
  videoUpload,
  imageSizeReducer,
} = require("../controller/fileUpload");

router.post("/loacalFileUpload", loacalFileUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);
router.post("/imageSizeReducer", imageSizeReducer);

module.exports = router;
