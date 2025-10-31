
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    Name:{
        type:String,
        unique:true,
        required: true
    },

    age:{
        type:Number,
        required:true
    },

    course:{
        type:String,
        enum:['BCA', 'BTech','DICS','MBA'],
        required: true
    },

    contact:{
        type:Number,
        required:true,

    }
})


const Product = mongoose.model('Product_Model',)

export default Product;