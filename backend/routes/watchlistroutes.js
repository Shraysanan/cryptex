var express = require('express');
const auth = require('../middleware/auth');
var router = express.Router();
const user = require('../models/user');

router.put("/", auth, async (req,res)=>{
    
    console.log("user is is "+req.header('userid'))
    const userId = req.header('userid');
    console.log(req.body.mywatchlist);
    let User = await user.findByIdAndUpdate({ _id: userId },{ $set: { "mywatchlist": req.body.mywatchlist}},{new: true},function(err,updateduser){
        if(err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send(updateduser);
        }
    })
});


router.get("/",auth, async (req,res)=>{
    const userId = req.header('userid');    
    console.log("=================================================================================");
    console.log(userId);
    let User = await user.findById({ _id: userId }, function(err,user){
        if(err) {
            console.log(err);
            res.status(500).send(err);
        } else {
             res.send(user.mywatchlist);
        }
    })
});

module.exports = router;
