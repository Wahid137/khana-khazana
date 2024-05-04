import { getRecipesByCategory } from "@/db/queries";

const CategoryPage = async ({ params: { CategoryTitle } }) => {
    const recipes = await getRecipesByCategory(CategoryTitle)
    return (

        <section class="container py-8">
            <div>

                <h3 class="font-semibold text-xl">Appetizers & Snacks</h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
                    <div class="card">
                        <img src="https://source.unsplash.com/-YHSwy6uqvk/300x160" class="rounded-md" alt="">
                            <h4 class="my-2">Chef John's Turkey Sloppy Joes</h4>
                            <div class="py-2 flex justify-between text-xs text-gray-500">
                                <span>⭐️ 5.0</span>
                                <span>By: John Doe</span>
                            </div>
                    </div>

                    <div class="card">
                        <img src="https://source.unsplash.com/-YHSwy6uqvk/300x160" class="rounded-md" alt="">
                            <h4 class="my-2">Chef John's Turkey Sloppy Joes</h4>
                            <div class="py-2 flex justify-between text-xs text-gray-500">
                                <span>⭐️ 5.0</span>
                                <span>By: John Doe</span>
                            </div>
                    </div>

                    <div class="card">
                        <img src="https://source.unsplash.com/-YHSwy6uqvk/300x160" class="rounded-md" alt="">
                            <h4 class="my-2">Chef John's Turkey Sloppy Joes</h4>
                            <div class="py-2 flex justify-between text-xs text-gray-500">
                                <span>⭐️ 5.0</span>
                                <span>By: John Doe</span>
                            </div>
                    </div>

                    <div class="card">
                        <img src="https://source.unsplash.com/-YHSwy6uqvk/300x160" class="rounded-md" alt="">
                            <h4 class="my-2">Chef John's Turkey Sloppy Joes</h4>
                            <div class="py-2 flex justify-between text-xs text-gray-500">
                                <span>⭐️ 5.0</span>
                                <span>By: John Doe</span>
                            </div>
                    </div>

                    <div class="card">
                        <img src="https://source.unsplash.com/-YHSwy6uqvk/300x160" class="rounded-md" alt="">
                            <h4 class="my-2">Chef John's Turkey Sloppy Joes</h4>
                            <div class="py-2 flex justify-between text-xs text-gray-500">
                                <span>⭐️ 5.0</span>
                                <span>By: John Doe</span>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryPage;