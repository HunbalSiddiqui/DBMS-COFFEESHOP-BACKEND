const Bill = require("../Models/bill")
const {Order} = require("../Models/order");
exports.placeOrder = (req,res) => {
    const order = new Order(req.body)
    order.save((err,placedOrder)=>{
        if(err)
        {
            console.log(err)
            return res.json({error : "Unable to place new order"})
        }
        const bill = new Bill(req.body)
        Bill.save((err,placedBill)=>{
            if(!err)
            {
                console.log("Bill Has Been Placed...")
            }
        })
        return res.json(placedOrder)
    })
}

exports.viewPlacedOrders = (req,res)=>{
    Order.find().exec((err,placedOrders)=>{
        if(err)
        {
            return res.json({error : "Unable to findplaced orders."})
        }
        return res.json(placedOrders)
    })
}