let figlet = require("figlet");
figlet("Shivam", function (err,data){
    if(err){
        console.log("Somthing Went Wrong");
        console.dir(err);
        return
    }
    console.log(data)
})