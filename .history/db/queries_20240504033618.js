import { recipeModel } from "@/models/recipe-models";

async function getAllRecipes() {
    const allRecipes = await recipeModel()
    return replaceMongoIdInArray(allRecipes)
}

export { getAllRecipes };

