// to define routes for cleint request,create routes folder

const express = require('express')
//import product controller
const productController = require('../controllers/productControllers')

// import wishlist controller 
const wishlistController = require('../controllers/wishlistController')


//import cart collection
const cartController = require('../controllers/cartController')

//using express create object for router class inorder to setup path
const router = new express.Router()



//resolve client request in various server routtes


//api
//get all product
router.get('/products/all-products',productController.getallproducts)
//view-product/id
router.get('/productS/view-product/:id',productController.viewproduct)
// add to wishlist
router.post('/wishlist/add-product',wishlistController.addtowishlist)
//get-wishlist-items
router.get('/wishlist/get-items',wishlistController.getwishlistItems)
//remove-wishlist-items
router.delete('/wishlist/remove-item/:id',wishlistController.removefromwishlist)
//add to cart
router.post('/cart/add-product',cartController.addtocart)
//get-cart
router.get('/cart/all-products',cartController.getCart)
//remove-carts-items
router.delete('/carts/remove-item/:id',cartController.removecarts)
//emptycart
router.delete('/carts/remove-all-items',cartController.emptycart)
//incrementQuantity
router.get('/carts/increment-quantity/:id',cartController.incrementquantity)
//decrementquantity
router.get('/carts/decrement-quantity/:id',cartController.decrementCartQuantity)


//export router
module.exports = router