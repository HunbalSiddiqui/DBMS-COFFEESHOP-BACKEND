var express = require("express")
var router = express.Router()
var {newEmployee} = require("../Controllers/employee")

router.post("/newEmployee",newEmployee)

module.exports = router
