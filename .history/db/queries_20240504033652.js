import { recipeModel } from "@/models/recipe-models";
import { replaceMongoIdInArray } from "@/utils/data-util";

async function getAllRecipes() {
    const allRecipes = await recipeModel.find()
    return replaceMongoIdInArray(allRecipes)
}
export { getAllRecipes };
export { getAllRecipes };

