const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    bio: {
        type: String,
        required: false,
        unique: false,
        trim: false,
        minlength: 0,
    },
}, {
    timestamps = true,
});

module.exports = mongoose.model("User", userSchema)