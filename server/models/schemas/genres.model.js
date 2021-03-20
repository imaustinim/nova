const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    type: String,
    enum: ["Rock", "Pop", "Jazz", "R&B", "Classical"],
    required: false,
})

module.exports = GenreSchema