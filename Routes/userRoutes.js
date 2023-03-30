const { uploadImages } = require('../ImgUpload/Multer');
const { verifyData, verifyUser } = require('../MiddleWare/userMiddleWare');
const { signUp, login, uploadProduct, getMyProducts, closebid, getAllProducts, placeBid, searchProducts, getMyWonBids, trackMyBids } = require('../UserHandlers/userHandlers');

const userRoutes = require('express').Router();

userRoutes
    .post('/signup', verifyData, signUp)
    .post('/login', verifyData, login )

    .post('/addproduct', verifyUser, uploadImages, uploadProduct )
    .post('/closebid', verifyUser, closebid)
    .post('/placebid', verifyUser, placeBid)

    .get('/search/:query', searchProducts)
    .get('/allproducts', getAllProducts)
    .get('/myproducts', verifyUser, getMyProducts)
    .get('/getmywonbids', verifyUser, getMyWonBids)
    .get('/trackmybids', verifyUser, trackMyBids)


module.exports = userRoutes
