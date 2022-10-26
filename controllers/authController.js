const User = require("../models/userModel")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res)=>{
    const salt = await bcrypt.genSalt(10)
    const hashedPwd = await bcrypt.hash(req.body.password, salt)
    const newUser = new User({
        username : req.body.username,
        email : req.body.email,
        password : hashedPwd
    })
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.login = async(req, res)=>{
    try {
        const user = await User.findOne({ username : req.body.username})
        if(!user) return res.status(400).json('Username or Password Incorrect')

        const password = await bcrypt.compare(req.body.password, user.password)
        if(!password) return res.status(400).json('Username or Password Incorrect')

        const token = jwt.sign({ id : user._id, isAdmin : user.isAdmin}, process.env.SECRET_KEY, { expiresIn : '1d'})

        res.status(200).json({token : token})

    } catch (error) {
        res.status(500).json(error)
    }
}