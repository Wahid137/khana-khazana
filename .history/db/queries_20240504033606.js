
async function getAllRecipes() {
    const allRecipes = await 
    return replaceMongoIdInArray(allRecipes)
}

export { getAllRecipes };

