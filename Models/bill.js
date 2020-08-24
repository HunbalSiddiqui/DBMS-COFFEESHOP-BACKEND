var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var billSchema = new Schema({
    order : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Order",
        required: true
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Customer",
        required: true
    },
    tax : {
        type : Number,
        required: true
    },
    tip : {
        type : Number,
        default : 0
    },
    bill : {
        type : Number,
        required: true
    },
    totalAmount : {
        type : Number,
        required: true
    }
},{timestamps:true})

module.exports = mongoose.model("Bill",billSchema)