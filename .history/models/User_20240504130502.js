import mongoose from "mongoose";

const recipesSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Anonymous",
        min: 2,
        max: 100,
    },
    description: {
        type: String,
    },
});

const User = mongoose.models.User || mongoose.model("User", UsersSchema);

export default User;
