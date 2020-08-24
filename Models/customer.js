const mongoose = require("mongoose");


const Schema = mongoose.Schema;

var customerSchema = new Schema({
    name : {
        type : String,
        required:true,
        maxlength:32,
        trim:true,
    },
    address : {
        type : String,
        required:true,
        maxlength:32,
        trim : true
    },
    category : {
        type: Number,
        default : 0
    },
    phone : {
        type : Number,
        required:true,
        maxlength : 13
    },
    purchases : {
        type : Array,
        default : []
    }
},{timestamps:true})

module.exports = mongoose.model("Customer",customerSchema)