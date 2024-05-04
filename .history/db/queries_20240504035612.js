import { recipeModel } from "@/models/recipe-models";

async function getAllRecipes() {
    try {
        const allRecipes = await recipeModel.find().lean();
        console.log(allRecipes); // Check if data is retrieved
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }

    // return replaceMongoIdInArray(allRecipes)
}
export { getAllRecipes };


