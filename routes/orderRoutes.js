const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orderController')
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyToken')


router.post('/', verifyTokenAndAuthorization, orderController.createOrder)

router.put('/:id', verifyTokenAndAdmin, orderController.updateOrder)

router.delete('/:id', verifyTokenAndAuthorization, orderController.deleteOrder)

router.get('/find/:id', verifyTokenAndAdmin, orderController.getUserOrder)

router.get('/', verifyTokenAndAdmin, orderController.getAllOrders)




module.exports = router 