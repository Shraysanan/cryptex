const jwt = require('jsonwebtoken');
// const config = require('config');
const jwtSecret = "my secret token";


module.exports = function(req, res, next) {
    // get token from header

    const token = req.header('x-auth-token');

    //check if not token

    if(!token){
        res.status(401).json({msg: 'No token, authorization denied'});
    }

    //Verify Token
    try{
        const decoded = jwt.verify(token, jwtSecret);

        req.user = decoded.user;
        next();
    }catch(err) {
        res.status(401).json({msg: 'Token is not valid'});
    }
};