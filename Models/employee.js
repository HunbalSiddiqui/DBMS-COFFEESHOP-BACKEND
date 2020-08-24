const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var employeeSchema = new Schema({
    name : {
        type : String,
        maxlength : 32,
        required: true,
        trim : true,
    },
    address :  {
        type : String,
        maxlength : 32,
        required: true,
        trim : true
    },
    role  : {
        type : String,
        require : true,
        trim : true,
    },
    Salary : {
        type : Number,
        require : true,
    },
    phone : {
        type : Number,
        required: true
    }
},{timestamps:true})

module.exports = mongoose.model("Employee",employeeSchema)