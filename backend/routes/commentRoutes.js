var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Comment = require('../models/comment');
const Post = require('../models/post');

router.post('/create',async(req,res)=>{
    const userId = req.header('userid');
    const postId = req.header('postid');
    User.findById(userId,async(err,user)=>{
        if(err){
          console.log(err);
          res.status(500).send(err);
        }
        else{
            await Post.findById(postId,async(err,post)=>{
                if(err){
                  console.log(err);
                  res.status(500).send(err);
                }
                else{
                    await Comment.create(req.body,async(err,comment)=>{
                      if(err){
                        console.log(err);
                        res.status(500).send(err);
                      }
                      else{
                        comment.author.id=userId;
                        comment.author.username=user.name;
                        comment.post.id=postId;
                        await comment.save();
                        post.comments.push(comment);
                        await post.save();
                        res.status(200).send("comment created and linked to user and post");

                      }
                    });
                }
            });
        }
    });
});

router.get('/getcomments',async(req,res)=>{
  console.log(req.header('postid'));
  const postId = req.header('postid');
  await Post.findById(postId).populate("comments").exec(function(err,post){
    if(err){
      console.log(err);
      res.status(500).send(err);
    }
    else{
      console.log(postId);
      res.status(200).send(post.comments);
    }
});
});

router.put('/editcomment',async(req,res)=>{
  const userId = req.header('userid');
  const commentId = req.header('commentid');
  const commentauthorid = req.header('commentauthorid');
  console.log("ready to update");
  if(userId==commentauthorid){
    await Comment.findByIdAndUpdate(commentId,{ text: req.body.text },(err,foundcomment)=>{
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
  console.log("ready to delete");
  if(userId==commentauthorid){
    await Comment.findByIdAndDelete(commentId,(err,foundcomment)=>{
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
