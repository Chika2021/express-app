let express = require('express');
let mongoose = require('mongoose');

const ProductSchema = mongoose.Schema( {
    id:Number, 
    name:String,
    type:String,
    brand:String
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;