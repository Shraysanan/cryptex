var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Post = require('../models/post');
const Comment = require('../models/comment');
    const { post } = require('./commentRoutes');

//new discussion
router.post('/create',async(req,res)=>{
    const userId = req.header('userid');
    User.findById(userId,function(err,user){
        if(err){
          console.log(err);
          res.status(500).send(err);
        }
        else{
        Post.create(req.body.post,function(err,post){
            //pass post object with params from react
          if(err){
            console.log(err);
            res.status(500).send(err);
          }
          else{
            post.author.id=userId;
            post.author.username=user.name;
            post.save();
            user.posts.push(post);
            user.save();
            res.status(200).send("discussion created and linked to user");
          }
        });
        }
      });  
});


//show all posts

router.get('/allposts',async (req,res)=>{
    Post.find({}, async (err,posts)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(posts);
        }
    })
});

//show current user posts

router.get('/myposts',async (req,res)=>{
    const userId = req.header('userid');
    User.findById(userId).populate("posts").exec(function(err,user){
        if(err){
            console.log(err);
            res.status(500).send(err);
        }else{
            res.status(200).send(user.posts);
        }
    });
});



router.get('/post/:id',async (req,res)=>{
    const postId = req.params.id;
    console.log(req.params);
    Post.findById(postId).populate("comments").exec(function(err,post){
        //populate comments later
        if(err){
            console.log(err);
            res.status(500).send(err);
        }else{
            res.status(200).send(post);
        }
    });
    
});

router.put('/editpost',async(req,res)=>{
    const userId = req.header('userid');
    const postId = req.header('postid');
    const postauthorid = req.header('postauthorid');
    //replace above headers with req.body logic later
    console.log("ready to update");
    if(userId==postauthorid){
      Post.findByIdAndUpdate(postId,{ Heading: req.body.Heading ,description: req.body.description},(err,foundpost)=>{
        if (err){
          res.status(500).send(err);
        } 
        else {
          foundpost.save();
          res.status(200).send("post updated");
        }
      });
    }
  });


router.delete("/deletepost", async (req, res)=>{
    const userId = req.header('userid');
    const postId = req.header('postid');
    const postauthorid = req.header('postauthorid');
    //replace above headers with req.body logic later
    console.log("ready to delete");
    if(userId==postauthorid){
      Post.findByIdAndDelete(postId,(err,foundpost)=>{
        if (err){
          res.status(500).send(err);
        } 
        else {
          res.status(200).send('post deleted');
        }
      });
    }
  });

module.exports = router;

