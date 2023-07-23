const contactListCollection = require("../model/contactSchema");
module.exports.postData = async function (req, res) {
    try {
        let savedData = await contactListCollection.create(req.body);
        // console.log(savedData);
        res.redirect("/");
    }
    catch (err) {
        console.log("error " + err);
        return;
    }
}