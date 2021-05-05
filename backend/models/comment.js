var mongoose=require("mongoose");

var commentSchema=mongoose.Schema({
  author:{
    id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    username:String
  } ,
  text:String,
  date:{ type: Date, default: Date.now },
  post: {
    id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"post"
    }
  }
});
module.exports=mongoose.model("Comment",commentSchema);
