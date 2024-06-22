var express = require('express');
var router = express.Router();
const usermodel = require("./users");
const localStrategy = require("passport-local");
const passport = require('passport');
passport.use(new localStrategy(usermodel.authenticate()))

/* GET home page. */

router.get("/" , (req,res) => {
  res.render('index');
});

router.get("/profile",isloggedin,function(req,res) {
  res.send("Welcome To Profile")
});


router.post("/resister" , function(req,res){
  var userdata = new usermodel({
    username:req.body.username,
    secret:req.body.secret
  });
  usermodel.resister(userdata , req.body.password).then(function(registereduser){
  passport.authenticate("local")(req,res,function(){
    res.redirect('/profile');
  })
})
});

router.post("/login" , passport.authenticate("local", {
successRedirect:"/profile",
failureRedirect:"/"
}), function(req,res){})

router.get("/logout", function(req,res,next){
  req.logout(function(err){
    if(err){return next(err);}
    res.redirect("/");
  });
});

function isloggedin(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  else{
    req.redirect("/")
  }
}




module.exports = router;
