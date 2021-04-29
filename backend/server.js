const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const Comment=require("./models/comment");
const Post=require("./models/post");
const User=require("./models/user")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongourl="mongodb+srv://cryptex:cryptex@cluster0.y0yzo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


mongoose.connect(mongourl,{useNewUrlParser: true,useUnifiedTopology: true},function(err, db) {
    if (err) throw err;
    console.log("Database connected!");
    
  });

const app=express();

const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

app.get("/",function(req,res){
    res.send("landing")
  });

//=====================================================================
//REGISTER API
//add email after frontend is made
app.use("/register",require('./routes/userRoutes'));
app.use("/login", require("./routes/LoginRoute"));



app.listen(5000,function(){
    console.log('cryptex has started')
});