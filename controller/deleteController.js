
const contactListCollection = require("../model/contactSchema");
module.exports.deleteData = async function (req, res) {
    try {
        let toBeDeleteId = req.params.id;
        await contactListCollection.findByIdAndDelete(toBeDeleteId);
        res.redirect("/");
    }
    catch (err) {
        console.log("error " + err);
        return;
    }
}