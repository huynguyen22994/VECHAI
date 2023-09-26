const express = require("express")
const router = express.Router()
const ProductRouter = require("./product.router")
const CustomerRouter = require("./customer.router")
const ShopRouter = require('./shop.router')

router.use('/product', ProductRouter);
router.use('/customer', CustomerRouter);
router.use('/shop', ShopRouter);
module.exports = router;