const 
    mongoose = require('mongoose'), //install package mongoose
    {urlDb} = require('../config'); // import configuration from app/config.js'

mongoose.connect(urlDb); // connect to mongoDB using configuration imported before

const db = mongoose.connection; // saving connection to the constant variable 

module.exports = db; // export db so connection can be used on other file