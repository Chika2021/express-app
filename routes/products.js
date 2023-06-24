
let express  = require('express');
let Product = require('../models/product');
const { createProduct, getProduct,
        updateProduct, searchProduct, 
                        deleteProduct } =
                                        require('../controller/productController');

let router = express.Router();

router.get('/' , getProduct);

router.post('/create' , createProduct);

router.put('/update' , updateProduct);
       
router.get('/name' , searchProduct);

router.delete('/delete' ,  deleteProduct )

module.exports = router;