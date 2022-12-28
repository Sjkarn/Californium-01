const jwt = require("jsonwebtoken");

const commonMiddleware = function(req,res,next) {
    if(req.headers['x-auth-token'] == null) {
        res.send("Pass the header with token")
    } else {
        let token = req.headers['x-auth-token'];
        let decodedToken = jwt.verify(token, "functionup-californium-very-very-secret-key");
        if(decodedToken._id === req.params.userId) {
            next()
        } else {
            res.send("Invalid token ID")
        }
    }
}

module.exports.commonMiddleware = commonMiddleware