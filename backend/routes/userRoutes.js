var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const{check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const jwtSecret = "my secret token";
const user = require('../models/user.js');

//Test route
//public
router.post('/',[ 
    // check('name', 'Name is required').not().isEmpty(),
    // check('email', 'Please include a proper email').isEmail(), //email format
    // check('password', 'Please enter a password with 5 or more charectors').isLength({min: 5})
], async (req, res) =>{
    console.log(req);
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }


    const {name, email, password} = req.body;

    try{
        
    // See if user exists
        // let nUser = await user.findOne({email});
        // if(nUser){
        //     res.status(400).json({ errors: [{msg: 'User already exists'}] });
        // }

        
    //Encrypt users password
        

        var User = new user({
            name,
            email,  
            password
        });

        console.log('before salt creation')
        const salt = await bcrypt.genSalt(10);
        console.log('after salt creation')
        console.log(password);
        User.password = await bcrypt.hash(password, salt);
        console.log(' password hashed');
        await User.save();
        console.log('after saving user');
    //Return json webtoken
    
    const payload = {
        User: {
            id: User.id,
        }
    }

    await jwt.sign(payload,jwtSecret,
    {expiresIn: 360000},//optional
    (err, token)=>{
        console.log("inside payload function");
        if(err){
            console.log("inside payload function 1");
            throw err;
        }else{
            console.log("inside payload function 2");
            console.log("token"+token);
            res.send({token});

            // console.log(token);
        }
    });
    console.log(jwtSecret);
    res.send('user registered')

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error')
    }

});

module.exports = router;