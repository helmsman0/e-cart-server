const mongoose  = require('mongoose')

//define schema for product collection to store data
const wishlistSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    
    image:{
        type:String,
        require:true
    },
   
})

//create model to store product
const wishlists = new mongoose.model("wishlists",wishlistSchema)

//export collection
module.exports = wishlists