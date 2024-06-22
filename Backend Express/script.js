//ye code server pe routs ke liye likha ja rha hai 
//aur jab ek url me kuchh parts same ho jaise www.facebook.com/profile 
//ye url sabhi user le liye same hoga lekin bas last ka routs change  honge 
//jaise www.facebook.com/profile/shivam
//jaise www.facebook.com/profile/prince
//jaise www.facebook.com/profile/aditya
//jaise www.facebook.com/profile/abhay

// to aisa karne ke liya ke liye ham sabke liye code to nhi likhe wale to ham 
// dyanamic data ka use karte hai to ab mai uska code likhne wala hu.. to dekho

// ----------START---------

const express = require("express");
const app = express();

app.get("/profile/:username" , function(req,res){
    res.send(`Hello Bhai ${req.params.username}`);
});

app.listen(3000);



