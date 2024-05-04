import connectMongo from "@/dbConnect/connectMongo";

export const getUsers = async () => {
    try {
        await connectMongo();

        // get users
        const users = await User.find();

        return users;
    } catch (err) {
        console.log(err);
    }
};