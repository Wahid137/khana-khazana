import { recipeModel } from "@/models/recipe-models";
import { replaceMongoIdInArray } from "@/utils/data-util";

async function getAllRecipes() {
    const allRecipes = await recipeModel.find().lean()
    return replaceMongoIdInArray(allRecipes)
}
export { getAllRecipes };


