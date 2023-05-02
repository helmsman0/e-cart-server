const { Collection } = require('mongoose')
const wishlists = require('../models/wishlistSchema')

//add to wishlist
exports.addtowishlist = async (req,res)=>{
    //get product details from request
    // using destruturing
    const {id,title,price,image}=req.body

    // logic
    try{
        // check products is in wishlists
         const item = await wishlists.findOne({id})
         if(item){
            res.status(402).json("Item already in your wishlist...")

         }
         else{
            // add item in wishlists Collection
            const newProduct = new wishlists({id,title,price,image})

            // to store db 
            await newProduct.save()
            res.status(200).json("Item added your wishlist...")
         }
    }
    catch(err){
        res.status(401).json(err)
    }


}

// get wishlists
exports.getwishlistItems = async (req,res)=>{
    //logic
    try{
        // get all products from wishlists Collection in mongodb
        const allproducts = await wishlists.find()
        res.status(200).json(allproducts)
    }
    catch(error){
        res.status(401).json(error)
    }
}

//remove items
exports.removefromwishlist = async (req,res)=>{
    //get id from req
    const{id} =req.params
   
    // remove item from wishlists collection 
    try{
        const removeItem = await wishlists.deleteOne({id})
        if(removeItem){
            // get all wishlists item after removing the particular item 
            const allItems = await wishlists.find()
            res.status(200).json(allItems)


        }
        else{
            res.status(401).json("Item not present in your wishlist")
        }
    }
    catch(error){
        res.status(401).json(error)
    }

}