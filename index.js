const { handleErrors } = require("./ErrorHandlers/Errors");

process.on('uncaughtException', handleErrors)
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors');
const userRoutes = require("./Routes/userRoutes");
require('dotenv').config()
const cloudinary = require('cloudinary')

// middleware
app.use(express.json())
app.use(cors({origin: "*"}))

// cloudinary set
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET
})

mongoose.connect(process.env.mongoURI)
    .then(success => {
        console.log("Database connected")
    })
    .catch(err => {
        console.log("Database failed to connect...\n", err)
    })


app.listen(5000, (err, success)=>{
    if(err){
        return console.log("Error running server...")
    }
    console.log('Server running ...')
})

app.use('/api', userRoutes)
