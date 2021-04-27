var mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
  name:String,
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
module.exports = User = mongoose.model('User', UserSchema);

