
let express  = require('express');
let Product = require('../models/product')


exports.createProduct =  async (req, res) =>{

    const  newProduct = await new Product({
        name:req.body.name,
        type:req.body.type,
        brand:req.body.brand
    });


    newProduct.save()
        .catch( (err) => {
            res.send({status:500, message:'Invalid or Bad Request' , err});
        } )
           
        .then(
            // res.send({status:200, message:'success' , newProduct})
            res.status(200).json({message:'Success' , productObj:newProduct})
        )
}


exports.getProduct = async (req, res)=>{
    const newProduct  = await Product.find();
  
    res.send({status:200, productObj:newProduct})
      
}