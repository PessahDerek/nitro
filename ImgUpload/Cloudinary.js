const cloudinary = require('cloudinary').v2


exports.getImageURL = async file => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream( {
            resource_type: 'image',
            public_id: `${Date.now() + file.originalname}`
        }, (err, res)=>{
            if(err){
                reject(err)
            }
            resolve(res.url)
        } ).end(file.buffer)
    })
  }