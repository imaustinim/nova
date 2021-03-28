const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SocialMediaSchema = new Schema({
    // platform: {
    //     type: String,
    //     enum: ["Facebook", "Instagram", "Github", "Website", "Twitter", "Twitch", "Other"],
    //     required: true,
    // },
    twitter: {
        type: String,
    },
    instagram: {
        type: String,
    },
    facebook: {
        type: String,
    },
    youtube: {
        type: String,
    },
    twitch: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    github: {
        type: String,
    },
    personal: {
        type: String,
    }
    // id: {
    //     type: String,
    //     required: true
    // },
})

module.exports = SocialMediaSchema