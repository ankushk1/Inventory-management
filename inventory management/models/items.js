// db schema

const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: false,
    },

    quantity: {
        type: String,
        required: false,
    }

}, {
    timestamps: true
});

//export 
module.exports = mongoose.model('items', itemSchema);