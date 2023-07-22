const mongoose= require("mongoose");
require("dotenv").config();
// console.log("it stores our .env file data "," ",process.env);
const url= process.env.MONGOURL;
mongoose.connect(url)
.then(()=>{
   console.log("connected sucessfully");
}).catch((err)=>{
    console.log(err);
});