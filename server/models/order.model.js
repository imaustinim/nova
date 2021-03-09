const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    orderDetails: {
        projectId: {
            type: String,
            required: true
        },
        orderSummary: {
            subtotal: {
                type: Number,
                default: 0,
                required: true,
            },
            tax: {
                type: Number,
                default: 0,
                required: true,
            },
            discount: {
                type: Number,
                default: 0,
                required: true,
            },
            total: {
                type: Number,
                default: 0,
                required: true,
            },
        },
        paymentMethod: {
            type: String,
            required: true,
        },
        time : { 
            type: Date,
            default: Date.now
        }
    }
}, {
    timestamps = true
});

module.exports = mongoose.model("Order", orderSchema)