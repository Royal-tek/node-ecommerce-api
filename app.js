const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const orderRoutes = require('./routes/orderRoutes')


// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

// BASE URL'S
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/order', orderRoutes)


// CONNECT TO DATABASE
mongoose.connect(process.env.DB_URL).then(console.log('DB connecteed'),app.listen(5000, ()=> console.log('server started on port 5000'))).catch(err => console.log(err))

