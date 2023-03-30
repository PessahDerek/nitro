const {getImageURL} = require('../ImgUpload/Cloudinary')
const ClosedBids = require('../Models/ClosedBids')
const Product = require('../Models/Product')
const users = require('../Models/userModel')

exports.signUp = async(req, res) => {
    let newUser = new users(req.body)
    try {
        let saved = await newUser.save()
        saved.passwd = ""
        saved.confPasswd = ""
        res.status(200).json({
            message: "Account created",
            user: saved
        })
    } catch (error) {
        res.status(500).json({
            message: "We could not sign you up, try again!",

        })
    }
}
exports.login = async(req, res) => {
    const { idNumber, passwd } = req.body
    let found = await users.findOne({$and: [{idNumber: idNumber}, {passwd: passwd}]}).select('_id firstName phone')
    
    if(found !== null) return res.status(200).json({
        message: "Login successful",
        user: found
    })
    res.status(404).json({
        message: "Wrong credentials! try again"
    })
}

exports.uploadProduct = async(req, res) => {
    let {files:{image}}=req, {category}=req.body, userProduct=req.body;
    let images = []
    for(let img of image){
        let url = await getImageURL(img)
        images.push(url)
    }

    try {
        let newProduct = new Product({
            ...userProduct,
            images: images,
            category: category.split(','),
            bids: [{bidder: "", amount: req.body.askingPrice}]
        })
        let saved = await newProduct.save()
        res.status(200).json({
            message: "Your product has been added"
        })
    } catch (error) {
        res.status(500).json({
            message: "Your Product Could Not Be Added, try again!"
        })
    }
}

exports.getMyProducts = async(req, res) => {
    let myProducts = await Product.find({bidOwner: req.headers.userid})
    res.status(200).json(myProducts)
}

exports.getAllProducts = async(req, res) => {
    try {
        let allProducts = await Product.find({open: true})
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(500).json({
            message: "We cannot fetch products at this time"
        })
    }
}

exports.closebid = async(req, res) => {
    await Product.findByIdAndUpdate(req.body.productId, {$set: {open: false}})
    .then(async(resp)=>{
        resp['product'] = resp._id
        resp['bidWinner'] = resp.bids.at(-1).bidder
        resp['closinPrice'] = resp.bids.at(-1).amount
        let closed_Bid = new ClosedBids({resp})
        await closed_Bid.save()
        .then(finall=>res.status(200).json({
            message: "Your bid has been closed at " + resp.bids.at(-1).amount
        }))
        .catch((err)=>{
            res.status(500).json({
                message: "Error in closing bid, contact support"
            })
        })
        
    })
    .catch(err=>{
        return res.status(500).json({
            message: "Sorry We could not close bid!, try again!"
        })
    })
}

exports.placeBid = async(req, res) => {
    let { prodId, amount} = req.body
    await Product.findByIdAndUpdate(prodId, {$push: {bids: {bidder: req.headers.userid, amount: amount}}})
    .then(resp => {
        res.status(200).json({
            message: "Your bid has been placed"
        })
    })
    .catch(err => {
        res.status(500).json({
            message: "Sorry, we could not place bid at this time"
        })
    })
}

exports.searchProducts = async(req, res)=>{
    let { query } = req.params
    await Product.find({$text: {$search: query}})
    .then(result=>{
        res.status(200).json(result)
    })
    .catch(err=>{
        // console.log(err)
    })
}

exports.getMyWonBids = async(req, res)=>{
    try {
        let found = await ClosedBids.find({bidWinner: req.headers.userid})
        res.status(200).json(found)
    } catch (error) {
        res.status(500).json({
            message: "We cannot get any of your won bids at this time, " +
            "if this persists contact us via email"
        })
    }
}

exports.trackMyBids = async({headers: {userid}}, res)=>{
    try {
        let found = await Product.find({bids: {$elemMatch: {bidder: userid}}})
        console.log(found)
        res.status(200).json(found)
    } catch (error) {
        res.status(500).json({
            message: "We can't fetch your active bids at the moment"
        })
    }
}
