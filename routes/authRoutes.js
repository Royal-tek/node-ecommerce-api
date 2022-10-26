const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
const authController = require('../controllers/authController')

// REGISTER A USER
router.post('/register', authController.register)

// LOGIN A USER
router.post('/login', authController.login)




module.exports = router 