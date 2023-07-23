const contactListCollection = require("../model/contactSchema");
module.exports.hmControl = async (req, res) => {
    try {
        let data = await contactListCollection.find({});
        // console.log(data," ", " dta oh hom control");
        res.render("home", {
            data,
        });
    }
    catch (err) {
        console.log("error " + err);
        return;
    }
}