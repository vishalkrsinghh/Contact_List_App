
const contactListCollection= require("../model/contactSchema");
module.exports.deleteData=async function(req,res){
    let toBeDeleteId=req.params.id;
    await contactListCollection.findByIdAndDelete(toBeDeleteId);
    res.redirect("/");
    // res.redirect("/");
}