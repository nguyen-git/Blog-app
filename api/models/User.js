import mongoose from "mongoose";   

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["male", "female", "unsexual"],
        default: "unsexual",
    },
    age: {
        type: Number,
        min: 1,
        max: 200,
    },
    career: {
        type: String,
    },
    admin: {
        type: Boolean,
        default: false,
    },
    savedArticle: {
        type: [String]
    },
    profilePic: {
        type: String,
    },
}, {timestamps: true});

export default mongoose.model('User', UserSchema);