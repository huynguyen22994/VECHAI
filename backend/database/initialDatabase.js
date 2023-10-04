'use strict'

const { connection } = require('./mysql') // Destructuring
const CustomerModel = require('../model/customer.repo')

connection(async () => {
    try {
        await CustomerModel.initTableToDB() // promise
        console.log('All tables created success:::::')
    } catch(err) {
        console.log(err)
    }
    // Chạy xong thoát chương trình
    process.exit()
})