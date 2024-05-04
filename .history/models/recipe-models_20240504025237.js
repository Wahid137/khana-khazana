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

    }

});


export const eventModel = mongoose.models.events ?? mongoose.model("events", schema);