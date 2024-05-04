import { getAllCategories } from "@/db/queries";
import Link from "next/link";

const CategoryList = async () => {
  const categories = await getAllCategories();

  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="font-bold text-xl">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
        {categories?.map((category, i) => (
          <li key={i}>
            <Link href={`/category/${encodeURIComponent(categoryUrl)}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
