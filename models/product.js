let express = require('express');
let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Order = require('./orders');

const ProductSchema = mongoose.Schema( {
    id:Number, 
    name:String,
    type:String,
    brand:String,
    orders: [{
        type:Schema.Types.ObjectId,
        ref: 'Order'
    }]
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;