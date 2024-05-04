import Image from "next/image";

const BannerImage = ({ recipeInfo }) => {
  return (
    <div className="col-span-12 md:col-span-6">
      <Image
        src={recipeInfo?.thumbanil}
        alt="banner"
        className="w-full h-full rounded-lg object-contain"
        width={900}
        height={400}
      />
    </div>
  );
};

export default BannerImage;
