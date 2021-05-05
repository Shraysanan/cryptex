var mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  mywatchlist: [String],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
    }],
posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post'
    }]
});
module.exports = User = mongoose.model('User', UserSchema);

