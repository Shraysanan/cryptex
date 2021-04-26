var mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");
var UserSchema=new mongoose.Schema({
  username:String,
  password:String,
  email:String,
  mywatchlist: [String],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comment'
    }],
posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post'
    }]
});
UserSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("User",UserSchema);
