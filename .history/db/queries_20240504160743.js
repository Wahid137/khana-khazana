
import { recipeModel } from "@/models/recipe-models";

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


export { getAllCategories, getAllRecipes, getRecipeById, getRecipesByCategory };


