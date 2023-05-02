//import cart collection
const carts = require('../models/cartSchema')

//add to cart
exports.addtocart = async(req,res)=>{
    //get product details from req
    const {id,title,image,price,quantity}=req.body

    //logic
    try{
        const product = await carts.findOne({id})
        
        if(product){
            //product is in cart
            product.quantity+=1
            //update granttotal
            product.grantTotal = product.price*product.quantity
            //to save changes in mongodb
            product.save()
            //send response to client
            res.status(200).json("Items added to your cart...")
        }
        else{
            //product is not in cart
            //add product to cart
            const newProduct = new carts({
                id,title,price,image,quantity,grantTotal:price
            })
            //save new product to mongodb
            await newProduct.save()
            //send response to client
            res.status(200).json("Item added to your cart...")
        }
    }
    catch(error){
     res.status(401).json(error)
    }

    
}  
//get cart
exports.getCart = async (req,res)=>{
    try{
       //get all items from cart collection
       const allItems = await carts.find()
       res.status(200).json(allItems)
    }
    catch(error){
       res.status(401).json(error)

    }
   }

    //remove items
    exports.removecarts = async (req,res)=>{
    //get id from req
    const{id} =req.params
   
    // remove item from carts collection 
    try{
        const removeItem = await carts.deleteOne({id})
        if(removeItem){
            // get all carts item after removing the particular item 
            const allItems = await carts.find()
            res.status(200).json(allItems)


        }
        else{
            res.status(401).json("Item not present in your carts")
        }
    }
    catch(error){
        res.status(401).json(error)
    }

}
//emptycart
exports.emptycart = async (req,res)=>{
    try{
        await carts.deleteMany({})
        res.status(200).json("Now it's empty...")
    }
    catch(error){
    res.status(401).json(error)
    }
}

//incrementQuantity 
exports.incrementquantity= async(req,res)=>{
     
    const {id} = req.params

    try{
        const product=await carts.findOne({id})
        if(product){
            //update quantity,grantTotal
             product.quantity+=1
             product.grantTotal = product.price*product.quantity
             //to save changes in mongodb
             await product.save()
             //get all cart collection item after update particular item count
             const allItems = await carts.find()
             res.status(200).json(allItems)

        }
    }
    catch(error){
        res.status(401).json()
    }
}

 //decrementquantity
 exports.decrementCartQuantity = async (req,res)=>{
    //get product id from req
    const{id}=req.params
    try{
        const product=await carts.findOne({id})
        if(product){
            //update quantity
            product.quantity-=1
            //check quantity=0
            if(product.quantity==0){
                //remove product from cart collection
                await carts.deleteOne({id})
                //get all cart collection items after removng p item
                const allItems = await carts.find()
                res.status(200).json(allItems)
            }
            else{
                product.grantTotal = product.price*product.quantity
                //to save changes in mongodb
                await product.save()
                //get all cart collection item after update particular item count
                const allItems = await carts.find()
                res.status(200).json(allItems)
   
            }
        }
        else{
            
            res.status(404).json("product is not in your carts...")
        }
    }
    catch{
        res.status(401).json(error)
    }
 }

