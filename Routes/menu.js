var express = require("express")
var router = express.Router()

const {updateMenu,viewMenu} = require("../Controllers/menu")

router.post("/updateMenu",updateMenu)
router.get("/viewMenu",viewMenu)
module.exports = router
