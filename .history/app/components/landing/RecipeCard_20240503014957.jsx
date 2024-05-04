import Image from "next/image";

const RecipeCard = () => {
    return (
        <div class="card">
          <Image src="https://source.unsplash.com/-YHSwy6uqvk" width={100} height={100} class="rounded-md" alt="card">
          <h4 class="my-2">Chef John's Turkey Sloppy Joes</h4>
       {/*    <div class="py-2 flex justify-between text-xs text-gray-500">
            <span>⭐️ 5.0</span>
            <span>By: John Doe</span>
          </div> */}
      </div>
    );
};

export default RecipeCard;