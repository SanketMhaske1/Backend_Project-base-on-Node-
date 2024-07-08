const File = require("../model/File");

exports.loacalFileUpload = async (req, res) => {
  try {
    const file = req.files.file;
    console.log(file);

    let path = __dirname + "/files/" + Date.now();
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

// exports.loacalFileUpload = async(req,res) =>{
//     try{

//     }catch(error){

//     }
// }
