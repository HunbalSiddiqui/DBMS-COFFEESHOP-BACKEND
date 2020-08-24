var express = require("express")
var router = express.Router()

const {getBill} = require("../Controllers/bill")

router.get("/getBill",getBill)

module.exports = router