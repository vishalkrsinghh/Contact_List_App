const express=require("express");
const router= express.Router();

router.post("/", require("../controller/saveInDb").postData);
module.exports=router;