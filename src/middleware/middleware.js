const jwt = require("jsonwebtoken");

const commonMiddleware = function(req,res,next) {
    try{
        if(req.headers['x-auth-token'] == null) {
        res.status(401).send("Pass the header with token")
    } else {
        let token = req.headers['x-auth-token'];
        let decodedToken = jwt.verify(token, "functionup-californium-very-very-secret-key");
        if(decodedToken._id === req.params.userId) {
            next()
        } else {
            res.status(403).send("Invalid token ID")
        }
    }
}
catch (err) {
    console.log("This is the error:", err.message)
    res.status(500).send({msg:"Error", error: err.message})
  }
}

module.exports.commonMiddleware = commonMiddleware