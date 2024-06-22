// ab maine express ko install kar liya hai mai express ko use karne ja rha hu 
//  yaha per hamne server ka code likh rha hu aur aalag routs bana rha hu 

let express = require("express");

let app = express();

//Write Middileware code
app.use(function(req,res,next) {
    console.log("Hello From MiddileWare");
    next();
})

app.get("/" , function(req , res){
    res.send("Hello World aapko supprot karna hoga bhaiyo");
   
});

app.get("/profile" , function(req , res) {
    res.send("Hello Profile Bhai Kaise Ho mai accha hu aap kaise ho ");
});

app.listen(3000);




