const userModel = require("../Models/userModel")


exports.verifyData = async(req, res, next) => {
    
    // 7 for signup and 3 for login
    if(Object.keys(req.body).length < (req.body.mode ? 7 : 3)) return res.status(400).json({
        message: "All fields are required"
    })
    if(Object.values(req.body).includes("")) return res.status(400).json({
        message: "All fields required"
    })
    if(req.body.passwd.length < 4) return res.status(400).json({
        message: "Password length is too short"
    })
    //if mode is false
    if(!req.body.mode)return next()
    if(req.body.passwd !== req.body.confPasswd) return res.status(400).json({
        message: "Passwords do not match"
    })
    next()
}

exports.verifyUser = async(req, res, next) => {
    let found = await userModel.findById(req.headers.userid)
    
    if(found !== null) return next()
    res.status(401).json({
        message: "You need to login or signup to use this feature"
    })
}
