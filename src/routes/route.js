const express = require("express");
const router = express.Router(); 



//import  module
const wel = require("../logger1/logger");
const help = require("../util/helper");
const format = require("../validator/formatter");
const lodash = require("../lodash/lodash");


router.get("/test-me", function (req, res) {
  
  console.log(wel.welcome());
  console.log(format.format());
  console.log(help.getBatchInfo());
  console.log(lodash.lodash());
  
  res.send("Running successfull");

 
 
});


module.exports = router;