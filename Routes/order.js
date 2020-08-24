var express = require("express")
var router = express.Router()

const {placeOrder,viewPlacedOrders} = require("../Controllers/order")

router.post("/placeOrder",placeOrder)
router.get("/viewPlacedOrders",viewPlacedOrders)
module.exports = router