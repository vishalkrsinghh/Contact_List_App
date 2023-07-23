const contactListCollection = require("../model/contactSchema");
module.exports.hmControl = async (req, res) => {
    try {
        let data = await contactListCollection.find({});
        res.render("home", {
            data,
        });
    }
    catch (err) {
        console.log("error " + err);
        return;
    }
}