
const contactListCollection= require("../model/contactSchema");
module.exports.updateData=async function(req,res){
    try{
        let totalData= await contactListCollection.find({});
        // console.log( totalData.length," ", " ln6");
        console.log(req.body, " body");
        let idToBeUpdate=req.params.id;
        // console.log(idToBeUpdate," "," ln 8");
        // console.log(totalData[idToBeUpdate]._id," "," ln 10");
        let dtae=await contactListCollection.findByIdAndUpdate(totalData[idToBeUpdate]._id,req.body)
       
        // console.log(dtae);
        return res.redirect("/");
    }
    catch(err){
        console.log("error "+err);
        return;
    }

}