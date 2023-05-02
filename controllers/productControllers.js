//import product collection/model
const products = require('../models/productSchema')

//get all-products api

exports.getallproducts = async (req,res)=>{
    //logic
try{
        //get all products from products collection in mongodb
     const allProducts = await products.find()
     res.status(200).json(allProducts)
}
catch(error){
    res.status(401).json(error)
}

}

// view products 
exports.viewproduct = async (req,res)=>{
//get product id from request
const id = req.params.id
console.log(id);
//logic 
try{
    //check id is present in mongodb
    const product  = await products.findOne({id})
    if(product){
        //send to client
        res.status(200).json(product)
    }
    else{
        res.status(404).json("Product Out of Stock")
    }
}
catch(error){
 res.status(401).json(error)
}

}