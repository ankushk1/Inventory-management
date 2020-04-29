// item schema
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: true,
    },

    quantity: {
        type: Number,
        required: true,
    }

}, {
    timestamps: true
});

//export 
module.exports = mongoose.model('Items', itemSchema);