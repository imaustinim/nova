const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    projectId: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },
    contract: {
        returnRate: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            default: 1,
        },
    },
    orderDetails: {
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
    timestamps: true
});

module.exports = OrderSchema