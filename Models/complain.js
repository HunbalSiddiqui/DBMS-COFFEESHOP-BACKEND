const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var complainSchema = new Schema({
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        required: true
    },
    description : {
        type : String,
        required: true,
        trim : true
    }
},{timestamps:true})

module.exports = mongoose.model("Complain",complainSchema)