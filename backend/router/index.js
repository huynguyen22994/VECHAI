const express = require("express")
const router = express.Router()
const CustomerRouter = require("./customer.router")
// const ShopRouter = require('./shop.router')

router.use('/customer', CustomerRouter);
// router.use('/shop', ShopRouter);
module.exports = router;