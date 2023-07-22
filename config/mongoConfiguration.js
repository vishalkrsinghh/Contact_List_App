const mongoose= require("mongoose");
const url= "mongodb+srv://vksingh:GE9ZaOc4iMScjotD@atlascluster.qipc8ac.mongodb.net/contactListDatabase";
mongoose.connect(url)
.then(()=>{
   console.log("connected sucessfully");
}).catch((err)=>{
    console.log(err);
});