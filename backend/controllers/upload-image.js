const cloudinary = require("cloudinary").v2;
exports.uploadImage = (req, res, next) => {
  try {
    const base64ImageUrl = req.body.base64Image;
    cloudinary.config({
      cloud_name: "huynhphvan",
      api_key: "523282691174997",
      api_secret: "RZz8LLy7Ij5pZ6QR1V9lNo12gMI",
    });
  
    cloudinary.uploader.upload(base64ImageUrl, function (error, result) {
      res.status(200).json({
          "imageURL": result.url // return iamge url to client
      })
    });
  } catch (error) {
    res.status(500).json({
      message: "Get error"
    });
  }    
 
};
