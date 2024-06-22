// ish folder ke andar ham tamlate litral ka use karenge 
// backend me html ke jagah ham ejs ka use karte hai hai kyo ki ye html ka modify verstion hai
// to ishke kuchh rule hai

// 1) ejs install ->>
     // ** npm i ejs

// 2) ejs ko configure karna ->>> ham ishe kisi bhi raout se pahle configure kar denge
    //** app.set("view engine" , "ejs");  ->> yha per hamesha view engine aur ejs hi aayega 

// 3) hame ek views naam ka folder banana hoga ->> folder views naam ka hi hona chahiye speling bhi same hona chahiye

// 4) aur fir use views file ke andar ek ejs file banao aur kitni bhi ejs file bana sakte hai

// 5) ab server ke code mai jha hamse res.send kiya tha waha waha res.rendar kar denge 
// rendar ke andar ham views foldar ke andar ke file ka naam likhte hai aue .ejs nahi likhte hai kewal file ka naam ka naam likht hai
// yadi ham ".ejs"laga denge to kaam nahi karega...


let express = require("express");

let app = express();

app.set("view engine" , "ejs");

app.get("/home",function(req,res){
    res.render("index");
});


// ejs hame allow karta hai ki ham dyanamic data add karne ke liye 
// mai  , {name:"shivam"} ishka matlab hai ki ejs page me jaha jaha name hoga waha waha shivam ho jayega 
// lekin hame name ko ejs file me aise likhna hoga <%= name %> tabhi ye badlega....

app.get("/contact",function(req,res){
    res.render("contact" , {name:"Shivam"});
});

app.listen(3000);