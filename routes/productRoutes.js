const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken} = require('./verifyToken')


router.post('/', verifyTokenAndAdmin ,productController.createPost)

router.put('/:id', verifyTokenAndAdmin, productController.updateProduct)

router.delete('/:id', verifyTokenAndAdmin, productController.deleteProduct)

router.get('/find/:id', verifyToken , productController.getProduct)

router.get('/', verifyTokenAndAdmin ,productController.getAllProducts)



module.exports = router 