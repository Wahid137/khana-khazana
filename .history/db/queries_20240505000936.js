
import connectMongo from "@/dbConnect/connectMongo";
import { recipeModel } from "@/models/recipe-models";
import { userModel } from "@/models/user-models";
import mongoose from "mongoose";

async function getAllRecipes() {
    try {
        await connectMongo()
        const allRecipes = await recipeModel.find();
        return allRecipes;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        throw error; // Rethrow the error for handling in upper layers
    }
}
async function getAllCategories() {
    try {
        await connectMongo()
        const categories = await recipeModel.distinct('category');
        return categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error; // Rethrow the error for handling in upper layers
    }
}
function isValidObjectId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}

async function getRecipeById(id) {
    await connectMongo()
    // Validate the ObjectId format
    if (!isValidObjectId(id)) {
        console.log('Invalid ObjectId provided:', id);
        return null; // or return undefined, depending on your preference
    }

    try {
        const recipe = await recipeModel.findOne({ _id: id }).lean();
        return recipe;
    } catch (error) {
        console.error('Error fetching recipe by id:', error);
        throw new Error('Error fetching recipe by id');
    }
}

async function getRecipesByCategory(category) {
    try {
        await connectMongo()
        const recipes = await recipeModel.find({ category: category });
        return recipes;
    } catch (error) {
        console.error("Error fetching recipes by category:", error);
        throw error; // Rethrow the error for handling in upper layers
    }
}

async function createUser(user) {
    await connectMongo()
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


