import connectMongo from "@/dbConnect/connectMongo";
import Recipe from "@/models/User";

export const getUsers = async () => {
    try {
        await connectMongo();

        // get users
        const users = await Recipe.find();

        return users;
    } catch (err) {
        console.log(err);
    }
};