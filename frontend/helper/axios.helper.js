const axios = require('axios')

module.exports = axios.create({
    baseURL: process.env['SERVERHOST'], // port 8000
    // timeout: 1000,
    // headers: {'x-api-key': process.env['APIKEY']}
});

// class Axios {

//     static initAxios() {
//         return axios.create({
//             baseURL: process.env['SERVERHOST'],
//             // timeout: 1000,
//             headers: {'x-api-key': process.env['APIKEY']}
//         });
//     }

//     static getInstance() {
//         if(!Axios.instance) {
//             Axios.instance = Axios.initAxios()
//         }
//         return Axios.instance
//     }
// }

// module.exports = Axios.getInstance()