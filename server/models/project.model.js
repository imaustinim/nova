const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    description: {
        type: String,
        required: false,
        unique: false,
        trim: false,
        minlength: 3
    },
}, {
    timestamps = true,
});

module.exports = mongoose.model("Project", projectSchema)