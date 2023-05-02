const mongoose  = require('mongoose')

//define schema for product collection to store data
const cartSchema = new mongoose.Schema({
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
    quantity:{
        type:Number,
        required:true
    },
    grantTotal:{
        type:Number,
        required:true
    }
   
})

//create model to store product
const carts = new mongoose.model("carts",cartSchema)

//export collection
module.exports = carts