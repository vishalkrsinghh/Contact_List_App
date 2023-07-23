const express=require("express");
const app= express();
const db= require("./config/mongoConfiguration");
const path= require("path");
require("dotenv").config();
const PORT= process.env.PORT || 8000;
// console.log(PORT);

app.use(express.static(path.join(__dirname,"./assets")))
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"./view"));
app.use("/",require("./routes/homeRoute"));

app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
})