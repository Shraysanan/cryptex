var mongoose=require("mongoose");
var postSchema=new mongoose.Schema({
  name:String,
  Heading:String,
  description:String,
  comments:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"comment"
    }
  ]
});

module.exports=mongoose.model("post",postSchema);
