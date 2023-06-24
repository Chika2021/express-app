
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

exports.updateProduct =  async (req,res) => {
    const id = req.query.id;
    // const id = '648dd4db1ce26922bf335e38';
    const name = req.query.name;
    const type =  req.query.type;
    const brand = req.query.brand;
    
    const newProduct = await Product.findByIdAndUpdate(id, {name,type, brand} ); 


    // console.log(id)
    res.send({status:200, message:'Product Updated Successfully' , product:newProduct } );
}


exports.searchProduct =  async (req, res ) => {

    const nameFind = req.query.name;

    const details = await Product.find( {name:nameFind})
    
    res.send({
        status:200,
        message:'Product Found',
        products:details.length,
        details:details
    });

}


exports.deleteProduct = async (req , res ) => {
    const id = req.query.id;
    
    const product = await Product.findByIdAndDelete(id);

    res.send({status:200 , message:'Product Deleted Successfully' , product});
}