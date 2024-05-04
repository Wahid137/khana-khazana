
async function getAllRecipes() {
    const allRecipes = await recipeModel.find();
    return replaceMongoIdInArray(allRecipes)
}

export { getAllRecipes };

