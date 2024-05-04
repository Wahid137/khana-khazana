
import { recipeModel } from "@/models/recipe-models";
import { userModel } from "@/models/user-models";
import mongoose from "mongoose";

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
    const recipe = await recipeModel.findOne({ _id: id }).lean();
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


async function updateFavorite(recipeId, authId) {
    const user = await userModel.findById(authId);
    console.log(user)

    if (user) {
        const found = user.favourites.find(
            (id) => id.toString() === recipeId
        );

        if (found) {
            user.favourites.pull(new mongoose.Types.ObjectId(recipeId));
        } else {
            user.favourites.push(new mongoose.Types.ObjectId(recipeId));
        }

        user.save();
    }
}

export { createUser, findUserByCredentials, getAllCategories, getAllRecipes, getRecipeById, getRecipesByCategory, updateFavorite };


