const User = require('../models/userModel')
const bcrypt = require('bcryptjs')

exports.updateUser = async (req, res)=>{
    if(req.body.password){
        req.body.password = bcrypt.hash(req.body.password, bcrypt.genSalt(10))
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set : req.body}, {new:true})
        res.status(201).json({updatedUser})
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteUser = async (req, res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User Deleted Successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getUser = async (req, res)=>{
    try {
        const user = await User.findById(req.params.id)
        const {password, ...others} = user._doc
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAllUsers = async (req, res)=>{
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}