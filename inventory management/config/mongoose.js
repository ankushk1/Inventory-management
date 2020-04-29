// Database
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/inventory_management');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});

//export db
module.exports = db;