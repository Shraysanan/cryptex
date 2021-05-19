const jwt = require('jsonwebtoken');
const jwtSecret = "my secret token";


module.exports = function(req, res, next) {

    const token = req.header('x-auth-token');


    if(!token){
        res.status(401).json({msg: 'No token, authorization denied'});
    }

    try{
        const decoded = jwt.verify(token, jwtSecret);

        req.user = decoded.user;
        next();
    }catch(err) {
        res.status(401).json({msg: 'Token is not valid'});
    }
};