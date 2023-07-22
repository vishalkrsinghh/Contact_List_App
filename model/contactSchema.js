const mongoose= require("mongoose");
const schem=new mongoose.Schema({
    contactName:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    }
})

const contactLstModl= mongoose.model("contactListCollection",schem );
module.exports=contactLstModl;