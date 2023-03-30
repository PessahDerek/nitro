const multer = require('multer');

const multerStorage = multer.memoryStorage();

const upload = multer({
    storage: multerStorage,
})

exports.uploadImages = upload.fields(
    [ 
        {
            name: 'image',
            maxCount: 4
        }
    ]
);