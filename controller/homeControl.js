const contactListCollection= require("../model/contactSchema");
module.exports.hmControl= async (req,res)=>{
    let data= await contactListCollection.find({});
    // console.log(data," ", " dta oh hom control");
    res.render("home",{
        data,
    });
}