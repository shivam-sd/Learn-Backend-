// setup mongoose

const { name } = require("ejs");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/kuchhdata");

const userschema = mongoose.Schema({
  username:String,
  Nickname:String,
  Discription:String,
  Cotegery:{
    type:Array,
    default:[]
  },
  DateCreated:{
    type:Date,
    default:Date.now()
  }
});

module.exports = mongoose.model("data",userschema);