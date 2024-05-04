
const CategoryPage = async ({ params: { CategoryTitle } }) => {
    const recipes = await getRecipesByCategory(CategoryTitle)
    return (
        <div>
            <h1>Category</h1>
        </div>
    );
};

export default CategoryPage;