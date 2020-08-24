var express = require("express")
var router = express.Router()

const {issueComplain,viewAllComplain} = require("../Controllers/complain")

router.post("/issueComplain",issueComplain)
router.get("/viewAllComplains",viewAllComplain)
module.exports = router