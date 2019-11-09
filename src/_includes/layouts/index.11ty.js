var cloudinary = require('cloudinary').v2;

module.exports = cloudinary.api.resources({ 
  type: 'upload', 
  prefix: 'photos/fall-2019/' 
}).then((res) => `${res.resources.map((image) => {
  return cloudinary.image(image.public_id, {
    transformation: [
      {
        width: 640,
        height: 480,
        crop: "fill",
      }
    ]
  });
})}`);