const express= require("express");
const route= express.Router();

route.get("/", require("../controller/homeControl").hmControl);
route.use("/submit",require("./sendData"));
route.use("/delete",require("./deleteRoute"));
route.use("/update", require("./updateDataRoute"));
module.exports=route;