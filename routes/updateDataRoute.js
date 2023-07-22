const express= require("express");

let router= express.Router();

router.post("/:id", require("../controller/updateDataController").updateData);
module.exports=router;