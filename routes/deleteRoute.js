const express=require("express");

const route= express.Router();

route.get("/:id", require("../controller/deleteController").deleteData);
module.exports=route;