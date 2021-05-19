const express=require("express");
const bodyParser=require("body-parser");
const path = require('path'); 

const Comment=require("./models/comment");
const Post=require("./models/post");
const User=require("./models/user");
const mongoose=require("mongoose");
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

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, "build", "index.html")));


app.use(express.static(path.join(__dirname, 'build')));  
app.use("/register",require('./routes/userRoutes'));
app.use("/login", require("./routes/LoginRoute"));
app.use("/watchlist",require("./routes/watchlistroutes"));
app.use("/discussion",require("./routes/postRoutes"));
app.use("/comment",require("./routes/commentRoutes"));


app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, "build", "index.html")));


app.listen(process.env.PORT||5000,process.env.IP,function(){
  console.log('Crpytex has started')
 });