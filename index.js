const express=require("express");
const app= express();
const db= require("./config/mongoConfiguration");
const path= require("path");
require("dotenv").config();
const PORT= process.env.PORT || 8000;
// console.log(PORT);
// const { collection } = require("./model/contactSchema");
// const contactListCollection= require("./model/contactSchema");


app.use(express.static(path.join(__dirname,"./assets")))
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"./view"));
app.use("/",require("./routes/homeRoute"));

// let viewData=new contactListCollection({contactName:"vishal Singh", phone:"08510036236"});
// viewData.save();
// console.log(viewData);

// insert data into collection.
//  contactListCollection.create({contactName:"vishal Singh", phone:"08510036236"});
//  get data from collection

app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
})