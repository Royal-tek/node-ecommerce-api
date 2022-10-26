const Order = require("../models/OrderModel")

exports.createOrder = async (req, res)=>{
    const order = new Order(req.body)
    try {
        const savedOrder = await order.save()
        res.status(201).json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}


exports.updateOrder = async (req, res)=>{
    try {
        const updateOrder = await Order.findByIdAndUpdate(req.params.id, {$set : req.body}, {new:true})
        res.status(201).json(updateOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteOrder = async (req, res)=>{
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order Deleted Successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getUserOrder = async (req, res)=>{
    try {
        const order = await Order.find({ userId : req.params.id})
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAllOrders = async (req, res)=>{
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json(error)
    }
}