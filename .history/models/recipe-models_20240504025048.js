import mongoose, { Schema } from "mongoose";

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
        required: false,
        type: Array
    },
    thumbnail: {
        required: false,
        type: Array
    },
    image: {
        required: false,
        type: Array
    }
});


export const eventModel = mongoose.models.events ?? mongoose.model("events", schema);