const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const passport=require("passport");
const LocalStratergy=require("passport-local");
const Comment=require("./models/comment");
const Post=require("./models/post");
const User=require("./models/user")
const mongourl="mongodb+srv://cryptex:cryptex@cluster0.y0yzo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongourl,{useNewUrlParser: true,useUnifiedTopology: true},function(err, db) {
    if (err) throw err;
    console.log("Database connected!");
  });

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/",function(req,res){
    res.send("landing")
  });

//=====================================================================
app.post("/register",function(req,res){
    var newUser=new User({username:req.body.username});
    User.register(newUser,req.body.password,function(err,user){
      if(err){
        res.send(err);
        console.log("error"+err)
      }
      passport.authenticate("local")(req,res,function(){
          res.send(newUser.username);
          console.log("authenticated");
      });
    });
  });
//=====================================================================
app.listen(5000,function(){
    console.log('cryptex has started')
});