let express = require('express');

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    // id:Number,
    account_Name:String,
    account_Number:String,
    account_Type:String,
    location: String
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;

