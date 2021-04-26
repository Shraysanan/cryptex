var mongoose=require("mongoose");

var commentSchema=mongoose.Schema({
  text:String,
  author:String,
  date:{ type: Date, default: Date.now }
});
module.exports=mongoose.model("Comment",commentSchema);
