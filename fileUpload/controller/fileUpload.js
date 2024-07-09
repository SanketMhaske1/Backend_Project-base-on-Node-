const File = require("../model/File");
const cloudinary = require("cloudinary").v2;

exports.loacalFileUpload = async (req, res) => {
  try {
    const file = req.files.file;
    console.log(file);

    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    console.log("Path->" + path);
    file.mv(path, (error) => {
      return res.status(403).json({
        success: false,
        message: "Error At Of Mv File",
        data: error,
      });
    });

    res.status(200).json({
      success: true,
      message: "Local File Uploaded Successfully",
    });
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Not Able To Upload Local File Successfully",
      data: error,
    });
  }
};

function isFileTypeSupported(type, supportedTypes) {
  return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
  const options = { folder };
  options.resource_type = "auto";
  if (quality) {
    options.quality = quality;
  }
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.imageUpload = async (req, res) => {
  try {
    const { name, tags, email } = req.body;

    const file = req.files.imageFile;

    const supportedTypes = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(403).json({
        success: false,
        message: "File Fromat Not Supporated",
        data: fileType,
      });
    }
    const response = await uploadFileToCloudinary(file, "Codehelp");

    const fildeData = await File.create({
      name: name,
      tags: tags,
      email: email,
      imageUrl: response.secure_url,
    });

    res.status(200).json({
      success: true,
      message: "Image Successfully Upload",
      data: fildeData,
    });
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Not Able To Upload Image Successfully",
      data: error,
    });
  }
};

exports.videoUpload = async (req, res) => {
  try {
    const { name, tags, email } = req.body;
    const file = req.files.videoFile;

    const supportedTypes = ["mp4", "mov"];
    const fileType = file.name.split(".")[1].toLowerCase();

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(403).json({
        success: false,
        message: "Video Fromat Not Supporated",
        data: fileType,
      });
    }

    const response = await uploadFileToCloudinary(file, "Codehelp");

    const fildeData = await File.create({
      name: name,
      tags: tags,
      email: email,
      imageUrl: response.secure_url,
    });

    res.status(200).json({
      success: true,
      message: "Video Successfully Upload",
      data: fildeData,
    });
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Not Able To Upload Video Successfully",
      data: error,
    });
  }
};

exports.imageSizeReducer = async (req, res) => {
  try {
    const { name, tags, email } = req.body;

    const file = req.files.imageFile;

    const supportedTypes = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(403).json({
        success: false,
        message: "File Fromat Not Supporated",
        data: fileType,
      });
    }
    const response = await uploadFileToCloudinary(file, "Codehelp", 30);

    const fildeData = await File.create({
      name: name,
      tags: tags,
      email: email,
      imageUrl: response.secure_url,
    });

    res.status(200).json({
      success: true,
      message: "Image Successfully Upload",
      data: fildeData,
    });
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Not Able To Reduce Image",
      data: error,
    });
  }
};
