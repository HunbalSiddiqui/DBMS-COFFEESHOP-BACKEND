const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var menuCartSchema = Schema({
    item : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Menu"
    },
    name : String,
    count : Number,
    price : Number
})

const MenuCart = mongoose.model("MenuCart",menuCartSchema)

var orderSchema = new Schema({
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Customer",
        required: true
    },
    items : [menuCartSchema],
    status : {
        type : String,
        default : "Recieved",
        enum : ["Canceled","Delivered","Preparing","Recieved"]   
    }
},{timestamps:true})

const Order = mongoose.model("Order",orderSchema)

module.exports = {Order,MenuCart}