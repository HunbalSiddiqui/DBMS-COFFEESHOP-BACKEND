const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var menuSchema = Schema({
    itemName : {
        type : String,
        required: true
    },
    itemPrice : {
        type : Number,
        required: true
    },
    itemDescription : {
        type : String,
        required: true,
        trim : true
    }
},{timestamps:true})

module.exports = mongoose.model("Menu",menuSchema)