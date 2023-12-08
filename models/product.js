
const { boolean } = require("joi");
var mongoose= require("mongoose");

//write your schema Here with name of schema as productSchema
const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    Quantity:{
        type:Number,
        required: true
    },
    Price:{
        type:Number,
        required: true
    },
    instock: String
})

module.exports =mongoose.model("products",productSchema);