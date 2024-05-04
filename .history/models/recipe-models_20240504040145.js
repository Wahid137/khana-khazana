import mongoose, { Schema } from "mongoose";

// Check if the model already exists
const Recipe = mongoose.models.users || mongoose.model("users", new Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    role: {
        required: true,
        type: String
    }
}));

export { Recipe };

