const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = require("./order.model")

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    firstName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 2
    },
    lastName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 2
    },
    birthDate: {
        type: Date,
        required: false,
        unique: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phone: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    bio: {
        type: String,
        required: false,
        unique: false,
        trim: false,
        minlength: 0,
    },
    orders: [orderSchema]
}, {
    timestamps = true,
});

module.exports = mongoose.model("User", userSchema)