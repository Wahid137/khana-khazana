import RecipeCard from "@/app/components/landing/RecipeCard";
import { getRecipesByCategory } from "@/db/queries";

const CategoryPage = async ({ params: { categoryTitle } }) => {
    console.log(categoryTitle)
    const recipes = await getRecipesByCategory(categoryTitle)
    console.log(recipes)
    return (

        <section class="container py-8">
            <div>

                <h3 class="font-semibold text-xl">{categoryTitle}</h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">

                    {recipes?.map((recipe) => (
                        <RecipeCard key={recipe?._id} recipe={recipe} />
                    ))}

                </div>
            </div>
        </section>
    );
};

export default CategoryPage;