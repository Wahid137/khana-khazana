import Image from "next/image";
const RecipeCard = ({ recipe }) => {
  return (
    <div className="card">
      <Image
        src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
        width={100}
        height={30}
        alt="cover"
      />
      <h4 className="my-2">Chef John's Turkey Sloppy Joes</h4>
      <div className="py-2 flex justify-between text-xs text-gray-500">
        <span>⭐️ 5.0</span>
        <span>By: John Doe</span>
      </div>
    </div>
  );
};

export default RecipeCard;
