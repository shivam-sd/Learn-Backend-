const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
const { post } = require(".");

mongoose.connect("mongodb://127.0.0.1:27017/social");

const userschema = mongoose.Schema({
  username:String,
  email:String,
  age:Number,
  password:String,
  profileImage:String,
  board:{
    type:Array,
    default:[]
  },
  posts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'post'
  }]
});

userschema.plugin(plm);

module.exports = mongoose.model("user" , userschema);
