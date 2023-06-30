let express = require('express');
let Order = require('../models/orders.js');

let mongoose = require('mongoose');

exports.createOrders  = async(req, res) => {
    const order = {
     account_Name:'New Castle Limited',
     account_Number:'48653485323',
     account_Type:'Savings Account',
     location: '23 Manchester City'
    }
 let orders =  await new Order({
     account_Name:req.body.account_Name,
     account_Number:req.body.account_Number,
     account_Type:req.body.account_Type,
     location: req.body.location  
 })
 
     orders.save()
 
         if(!orders) {
             res.send({status:500, message:'Invalid Or Bad request'})
         }
         else
             res.send({status:200, message:'success', orders});
 }
 

 exports.getOrders = async (req, res ) => {

    const orders = await Order.find()
    
    res.send({status:200, message:'success', orders});

}


exports.searchOrders = async (req, res) => {
    const id = req.query.id;
    const nameFind = req.query.account_Name;
    const orders = await Order.find({nameFind});

    // res.send({status:200 , message:'Success', orders:orders.length, ordersObj:orders })

    res.status(200).json({
        message:'Success', 
        orders:orders.length, 
        ordersObj:orders
    })
}

exports.updateOrders = (req,res) => {
    const id = req.query.id;
    const name = req.query.account_Name;

    const orders = Order.findOneAndUpdate(id, {name}); 

    // console.log(orders)

    res.send({status:200 , message:'Order Updated Successfully', orders:orders})
}

exports.deleteOrders = async (req, res) => {
    const id = req.query.id
    // const name

    await Order.findOneAndDelete({id})

    res.send({status:200, message:'Order Deleted', id:id});



}