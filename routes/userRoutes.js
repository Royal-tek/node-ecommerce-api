const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const { verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyToken')


router.put('/:id', verifyTokenAndAuthorization ,userController.updateUser)

router.delete('/:id', verifyTokenAndAuthorization, userController.deleteUser)

router.get('/find/:id', verifyTokenAndAdmin, userController.getUser)

router.get('/', verifyTokenAndAdmin, userController.getAllUsers)



module.exports = router 