const Product = require("../models/productModel")

exports.createPost = async (req, res)=>{
    const product = new Product(req.body)
    try {
        const savedProduct = await product.save()
        res.status(201).json(savedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
}


exports.updateProduct = async (req, res)=>{

    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {$set : req.body}, {new:true})
        res.status(201).json(updatedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteProduct = async (req, res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product Deleted Successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getProduct = async (req, res)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAllProducts = async (req, res)=>{
    try {
        const product = await Product.find()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}