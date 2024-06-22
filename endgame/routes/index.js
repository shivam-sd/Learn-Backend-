var express = require('express');
var router = express.Router();

var usermodel = require("./users");


/* GET home page. */
router.get("/" , async function(req,res) {
  let usercreate = await usermodel.create({
    username:"Shivani",
    Nickname:"shivani",
    Discription:"I am a Student,19 years old ",
    Cotegery:["HTML","CSS","JAVASCRIPT","NODE"],
  })
  res.send(usercreate);
})

router.get("/find",async function(req,res){
  let regx = new RegExp("^shivani$","i");
  let userfind = await usermodel.find({username:regx});
  res.send(userfind);
})

router.get("/date",async function(req,res){
  var date1 = new Date('2024-6-19')
  var date2 = new Date('2024-6-11')
  let userdate = await usermodel.find({DateCreated:{$gte:date1,$lte:date2}});
  res.send(userdate);
})                                                             


module.exports = router;
