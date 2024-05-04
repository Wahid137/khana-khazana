"use client";
import { addFavoriteRecipe } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ShareButton from "./ShareButton";

const BannerContent = ({ recipeInfo }) => {
  const { auth } = useAuth();
  const router = useRouter();
  const favArray = auth?.favourites;
  console.log("array", favArray);
  console.log(recipeInfo?._id);
  const isFav = favArray?.find((id) => id === recipeInfo?._id);
  console.log(isFav);
  const [isFavorite, setIsFavorite] = useState(isFav);

  const toggleFavorite = async () => {
    if (auth) {
      addFavoriteRecipe(recipeInfo?._id, auth?._id);
      setIsFavorite(!isFavorite);
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="col-span-12 md:col-span-6 py-8 flex flex-col justify-center">
      <h2 className="font-semibold text-4xl lg:w-8/12 leading-10">
        {recipeInfo?.name}
      </h2>
      <p className="text-xs text-[#eb4a36] italic my-2">
        {recipeInfo?.category}
      </p>
      <p className="text-gray-600 text-sm my-6 leading-6">
        {recipeInfo?.description}
      </p>

      <div className="flex gap-4 justify-center divide-x my-12">
        <div className="flex-1 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mx-auto"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M12 7v5l3 3" />
          </svg>
          <h3 className="font-medium text-lg text-gray-700 mt-2">Prep time</h3>
          <p className="text-gray-500 text-sm">{recipeInfo?.activeTime}</p>
        </div>
        <div className="flex-1 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mx-auto"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6.5 17h11" />
            <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
            <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
          </svg>
          <h3 className="font-medium text-lg text-gray-700 mt-2">Cook time</h3>
          <p className="text-gray-500 text-sm">{recipeInfo?.totalTime}</p>
        </div>
        <div className="flex-1 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mx-auto"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
          </svg>
          <h3 className="font-medium text-lg text-gray-700 mt-2">Servings</h3>
          <p className="text-gray-500 text-sm">{recipeInfo?.serves}</p>
        </div>
      </div>

      <div className="flex gap-4 justify-end">
        <div
          onClick={() => toggleFavorite()}
          className={`flex gap-2 text-gray-600 cursor-pointer ${
            isFavorite
              ? "py-2 bg-[#eb4a36] px-4 rounded-md text-white content-center"
              : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
          <span>Favourite</span>
        </div>

        <ShareButton url={url} />
      </div>
    </div>
  );
};

export default BannerContent;
