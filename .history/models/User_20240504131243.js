import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Anonymous",
        min: 2,
        max: 100,
    },
    description: {
        type: String,
    },
    author: {
        required: true,
        type: String
    },
    activeTime: {
        required: true,
        type: String
    },
    totalTime: {
        required: true,
        type: String
    },
    thumbnail: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
    serves: {
        required: true,
        type: Number
    },
    rating: {
        required: true,
        type: Number
    },
    steps: {
        required: true,
        type: Array
    },
});

const User = mongoose.models.User || mongoose.model("User", UsersSchema);

export default User;
