var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Comment = require('../models/comment');
const Post = require('../models/post');

router.post('/create',async(req,res)=>{
    const userId = req.header('userid');
    const postId = req.header('postid');
    User.findById(userId,function(err,user){
        if(err){
          console.log(err);
          res.status(500).send(err);
        }
        else{
            Post.findById(postId,function(err,post){
                if(err){
                  console.log(err);
                  res.status(500).send(err);
                }
                else{
                    Comment.create(req.body,function(err,comment){
                        //pass post object with params from react
                      if(err){
                        console.log(err);
                        res.status(500).send(err);
                      }
                      else{
                        comment.author.id=userId;
                        comment.author.username=user.name;
                        comment.post.id=postId;
                        comment.save();
                        post.comments.push(comment);
                        post.save();
                        res.status(200).send("comment created and linked to user and post");

                        //check if user needs to be altered and saved as well
                      }
                    });
                }
            });
        }
    });
});

//=====================================================================================
//=====================================================================================
//BELOW ROUTES ARE LEFT TO BE CHECKED ON POSTMAN

// router.get('/getcomments',async(req,res)=>{
//   const postId = req.header('postid');
//   Post.findById(postId).populate("comments").exec(function(err,post){
//     if(err){
//       console.log(err);
//       res.status(500).send(err);
//     }
//     else{
//       res.status(200).send(post.comments);
//     }
// });
// });

router.put('/editcomment',async(req,res)=>{
  const userId = req.header('userid');
  const commentId = req.header('commentid');
  const commentauthorid = req.header('commentauthorid');
  //replace above headers with req.body logic later
  console.log("ready to update");
  if(userId==commentauthorid){
    Comment.findByIdAndUpdate(commentId,{ text: req.body.text },(err,foundcomment)=>{
      if (err){
        res.status(500).send(err);
      } 
      else {
        foundcomment.save();
        res.status(200).send("comment updated");
      }
    });
  }
});

router.delete("/deletecomment", async (req, res)=>{
  const userId = req.header('userid');
  const commentId = req.header('commentid');
  const commentauthorid = req.header('commentauthorid');
  //replace above headers with req.body logic later
  console.log("ready to delete");
  if(userId==commentauthorid){
    Comment.findByIdAndDelete(commentId,(err,foundcomment)=>{
      if (err){
        res.status(500).send(err);
      } 
      else {
        res.status(200).send('comment deleted');
      }
    });
  }
});

module.exports = router;
