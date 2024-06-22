// let name = "shivam";
// module.exports = name;

let express = require('express');
let app = express()

app.use(function(req,res,next){
    console.log("Hello Bhai ki Haal Chal")
    next()
})
app.use(express.static("./public"))
app.set("view engine" , "ejs");


app.get("/profile/:username" , function(req, res){
    res.render("index" , {name:"shivam"});
});

app.get("/like" , function(req , res) {
    res.send("Like karo mere bhai kaise ho like kar duya ki nahi bhai nahi kiya to kar do mere bhai jaldi se pleacr yaar ");
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(3000);