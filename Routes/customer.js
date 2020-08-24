var express = require("express")
var router = express.Router()

//get controllers
const {newCustomer} = require("../Controllers/customer")

router.post("/newCustomer",newCustomer)

module.exports = router