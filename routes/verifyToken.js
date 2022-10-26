const jwt = require('jsonwebtoken')

const verifyToken =  (req, res, next)=>{
    const authToken = req.headers.token
    
    if(authToken){
        jwt.verify(authToken, process.env.SECRET_KEY, (err, user)=>{
            if(err) return res.status(403).json("Invalid Token")
            req.user = user
            next()
        })

    }
    else{
        res.status(400).json('You are not authenticated')
    }
}

const verifyTokenAndAuthorization =  (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(400).json('You are not permitted to carry out this action')
        }
        
    })
}

const verifyTokenAndAdmin =  (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.isAdmin){
            next()
        }else{
            res.status(400).json('You are not permitted to carry out this action')
        }
        
    })
}


module.exports = { verifyToken , verifyTokenAndAuthorization, verifyTokenAndAdmin}