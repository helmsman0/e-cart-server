const mongoose  = require('mongoose')

//define schema for product collection to store data
const productSchema = new mongoose.Schema({
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
    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    rating:{
        rate:{
            type:Number,
            require:true
        },
        count:{
            type:Number,
            require:true
        }
    }
})

//create model to store product
const products = new mongoose.model("products",productSchema)

//export collection
module.exports = products