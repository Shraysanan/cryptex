var mongoose=require("mongoose");
var postSchema=new mongoose.Schema({
  author:{
    id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    username:String
  },
  Heading:String,
  description:String,
  date:{ type: Date, default: Date.now },
  comments:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Comment"
    }
  ]
});

module.exports=mongoose.model("post",postSchema);
