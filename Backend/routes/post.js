const mongoose = require("mongoose");
const users = require("./users");

const postschema = mongoose.Schema({
  title:String,
  description:String,
  image:String,
  users:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  }
});

module.exports = mongoose.model("post" , postschema);
