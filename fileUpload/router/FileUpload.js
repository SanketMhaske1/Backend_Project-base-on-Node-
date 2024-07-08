const express = require("express");
const router = express.Router();

const { loacalFileUpload } = require("../controller/fileUpload");

router.post("/loacalFileUpload", loacalFileUpload);

module.exports = router;
