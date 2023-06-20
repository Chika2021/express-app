
let express  = require('express');
let Product = require('../models/product')

let router = express.Router();




router.post('/create', async (req, res) =>{

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
});
   
router.get('/', async (req, res)=>{
    const newProduct  = await Product.find();
  
    res.send({status:200, productObj:newProduct})
      
});
       
router.get('/name' , async (req, res ) => {

    const nameFind = req.query.name;

    const newProduct = await Product.find({name:nameFind})
    
    res.status(200).json({
        message:'Product Found',
        products:newProduct.length,
        productObj:newProduct
    });

});  

router.put('/update' , async (req,res) => {
    const id = req.query.id;
    // const id = '648dd4db1ce26922bf335e38';
    const name = req.query.name;
    
    const newProduct = await Product.findOneAndUpdate(id, {name:name}); 


    // console.log(id)
    res.send({status:200, message:'Product Updated Successfully' , product:newProduct } );
});

module.exports = router;