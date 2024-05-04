const { recipeModel } = require("@/models/recipe-models");
const { replaceMongoIdInArray } = require("@/utils/data-util");

async function getAllRecipes() {

    const allRecipes = await recipeModel.find().lean();
    return replaceMongoIdInArray(allRecipes)
}

export { getAllRecipes };
