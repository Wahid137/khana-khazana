import mongoose, { Schema } from "mongoose";

const modelName = "recipes";

const schema = new Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    activeTime: {
        required: true,
        type: String
    },
    localTime: {
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
        required: false,
        type: Array
    },
});

// Check if the model already exists
const existingModel = mongoose.modelNames().includes(modelName)
    ? mongoose.model(modelName)
    : null;

// Export the existing model if available, otherwise create a new one
export const recipeModel = existingModel || mongoose.model(modelName, schema);
