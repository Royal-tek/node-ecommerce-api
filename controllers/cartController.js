const Cart = require("../models/CartModel")

exports.createCart = async (req, res)=>{
    const cart = new Cart(req.body)
    try {
        const savedCart = await cart.save()
        res.status(201).json(savedCart)
    } catch (error) {
        res.status(500).json(error)
    }
}


exports.updateCart = async (req, res)=>{
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {$set : req.body}, {new:true})
        res.status(201).json(updatedCart)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteCart = async (req, res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart Deleted Successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getUserCart = async (req, res)=>{
    try {
        const cart = await Cart.findOne({ userId : req.params.id})
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAllCarts = async (req, res)=>{
    try {
        const cart = await Cart.find()
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error)
    }
}