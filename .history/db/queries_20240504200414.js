
import { recipeModel } from "@/models/recipe-models";
import { userModel } from "@/models/user-models";

async function getAllRecipes() {
    try {
        const allRecipes = await recipeModel.find();
        return allRecipes;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        throw error; // Rethrow the error for handling in upper layers
    }
}
async function getAllCategories() {
    try {
        const categories = await recipeModel.distinct('category');
        return categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error; // Rethrow the error for handling in upper layers
    }
}
async function getRecipeById(id) {
    const recipe = await recipeModel.findById(id).lean();
    return recipe;
}

async function getRecipesByCategory(category) {
    try {
        const recipes = await recipeModel.find({ category: category });
        return recipes;
    } catch (error) {
        console.error("Error fetching recipes by category:", error);
        throw error; // Rethrow the error for handling in upper layers
    }
}

async function createUser(user) {
    return await userModel.create(user);
}

async function findUserByCredentials(credentials) {
    const user = await userModel.findOne(credentials).lean();
    if (user) {
        return user;
    }
    return null;
}


async function updateFavorite(eventId, authId) {
    const event = await eventModel.findById(eventId);

    if (event) {
        const foundUsers = event.interested_ids.find(
            (id) => id.toString() === authId
        );

        if (foundUsers) {
            event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
        } else {
            event.interested_ids.push(new mongoose.Types.ObjectId(authId));
        }

        event.save();
    }
}

export { createUser, findUserByCredentials, getAllCategories, getAllRecipes, getRecipeById, getRecipesByCategory };


