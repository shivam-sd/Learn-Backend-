const mongoose = require("mongoose");
const plm = require("passport-local-mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/form");

const userschma = mongoose.Schema({
  name:String,
  username:String,
  secret:String
});

userschma.plugin(plm);

module.exports = mongoose.model("user",userschma);