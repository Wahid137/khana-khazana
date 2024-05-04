import Image from "next/image";
const RecipeCard = ({ recipe }) => {
  const { thumbnail, image, name, rating, author } = recipe;

  return (
    <div className="card">
      <Image src={thumbnail} width={200} height={30} alt="cover" />
      <h4 className="my-2">{name}</h4>
      <div className="py-2 flex justify-between text-xs text-gray-500">
        <span>⭐️ {rating}</span>
        <span>By: {author}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
