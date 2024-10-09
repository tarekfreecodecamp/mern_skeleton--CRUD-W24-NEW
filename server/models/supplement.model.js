import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const SupplementSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    description: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        //match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email is required'
    },

    price: {
        type: Number,
        trim: true,
        required: 'price is required'
    },

    quantity: {
        type: Number,
        trim: true,
        required: 'quantity is required'
    },

    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }

});

//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('Supplement', SupplementSchema);
