const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const genreSchema = require("./schemas/genres.model");
// const SocialMediaSchema = require("./schemas/socialmedia.model");

const detailsSchema = new Schema({
    projectId: {
        type: String,
        required: true,
        unique: true,
    },
    projectName: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    projectType: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    authorId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    description: {
        type: String,
        trim: true,
    },
    visibility: {
        type: String,
        default: "private",
        enum: ["private", "public"]
    },
    releaseDate: {
        type: Date,
    },
    genres: {
        type: Array,
    },
    media: {
        type: Array,
    },
    videoUrl: {
        type: String,
    }
})

const contractSchema = new Schema({
    capitalRequired: {
        type: Number,
        required: true,
        default: 0,
    },
    capitalRaised: {
        type: Number,
        required: true,
        default: 0,
    },
    returnRate: {
        type: Number,
        required: true,
        default: 0.10,
    }
})

const statSchema = new Schema({
    novaScore: {
        type: Number,
        default: 0
    },
    trendScore: {
        type: Number,
        default: 0
    },
    numUsers: {
        type: Number,
        default: 0
    },
    like: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    followers: {
        type: Number,
        default: 0
    }
})

const projectsSchema = new Schema({
    details: detailsSchema,
    contract: contractSchema,
    // socialMedia: [SocialMediaSchema],
    // stats: [statSchema],
}, {
    timestamps: true,
});

module.exports = mongoose.model("Projects", projectsSchema)