import mongoose from "mongoose";

export async function connectMongo) {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected");
        return conn;
    } catch (err) {
        console.log(err);
    }
}