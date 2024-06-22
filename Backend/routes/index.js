var express = require('express');
var router = express.Router();
const usermodel = require("./users");
const postmodel = require("./post");
const localStratagy = require("passport-local");
const passport = require('passport');
passport.use(new localStratagy(usermodel.authenticate()));
const upload = require('./multer');

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/profile',isLoggedIn, async function(req, res, next) {
  const user = await usermodel.findOne({username:req.session.passport.user}).populate('posts');
  console.log(user)
  res.render('profile' , {user:user});
});

router.get('/show/posts', isLoggedIn, async function(req, res, next) {
  const user = await usermodel.findOne({username:req.session.passport.user}).populate('posts');
  // console.log(user)
  res.render('show' , {user:user});
});

router.get('/feed', isLoggedIn, async function(req, res, next) {
  const user = await usermodel.findOne({username:req.session.passport.user});
  const posts = await postmodel.find().populate('users');
  res.render('show' , {user, posts});
});


router.post("/profileupload" , isLoggedIn, upload.single('file') , async function(req,res){
const user = await usermodel.findOne({username:req.session.passport.user});
user.profileImage = req.file.filename;
await user.save();
res.redirect("/profile")
});

router.get("/addpost" , function(req,res){
  res.render("addpost")
});

router.post("/createpost" , isLoggedIn , upload.single('imagepost'), async function(req,res){
  const user = await usermodel.findOne({username:req.session.passport.user});
  const post = await postmodel.create({
    user:user._id,
    title:req.body.title,
    description:req.body.description,
    image:req.file.filename
  });
  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
});


router.post("/register",function(req,res){
  const userdata = new usermodel({
    username:req.body.username,
    email:req.body.email,
    age:req.body.age,
    password:req.body.password
  });
  usermodel.register(userdata , req.body.password).then(function(registerdduser){
    passport.authenticate("local")(req,res,function(){
      res.redirect("/profile")
    })
  })
});

router.post("/login" , passport.authenticate("local" , {
  successRedirect: "/profile",
  failureRedirect: "/"
}) , function(req,res){ })


router.get("/logout" , function(req,res,next){
  req.logout(function(err){
    if(err){
      return next(err);
    }
    res.redirect('/login');
  })
})


function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}


module.exports = router;
