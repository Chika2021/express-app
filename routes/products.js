
let express  = require('express');
let Product = require('../models/product');
const { createProduct, getProduct } = require('../controller/productController');

let router = express.Router();


router.post('/create' , createProduct);

router.get('/' , getProduct);
       
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