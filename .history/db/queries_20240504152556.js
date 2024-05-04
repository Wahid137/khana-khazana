
import { recipeModel } from "@/models/recipe-models";

async function getAllRecipes() {
    const allRecipes = await recipeModel.find()
    return allRecipes;
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

export { getAllCategories, getAllRecipes };


