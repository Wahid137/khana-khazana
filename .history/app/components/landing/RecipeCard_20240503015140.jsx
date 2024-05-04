import Image from "next/image";
import cover from "/assets/cover.png";
const RecipeCard = () => {
    return (
        <div className="card">
          <Image src={cover} width={100} height={50}  className="rounded-md" alt="card">
          <h4 className="my-2">Chef John's Turkey Sloppy Joes</h4>
          <div className="py-2 flex justify-between text-xs text-gray-500">
            <span>⭐️ 5.0</span>
            <span>By: John Doe</span>
          </div>
      </div>
    );
};

export default RecipeCard;