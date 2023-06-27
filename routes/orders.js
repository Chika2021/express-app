let express = require('express')
const Order = require('../models/orders');
const { createOrders, getOrders, searchOrders, 
                    updateOrders, deleteOrders } = require('../controller/ordersController');

let router  = express.Router()

router.get('/' , getOrders);

router.post('/create' , createOrders);

router.get('/order-name', searchOrders);

router.put('/update',  updateOrders);

router.delete('/delete', deleteOrders);

module.exports = router;