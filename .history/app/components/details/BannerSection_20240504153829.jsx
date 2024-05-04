import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";

const BannerSection = ({ recipeInfo }) => {
  return (
    <section>
      <div className="grid grid-cols-12 container gap-8 justify-items-center">
        <BannerImage recipeInfo={recipeInfo} />
        <BannerContent recipeInfo={recipeInfo} />
      </div>
    </section>
  );
};

export default BannerSection;
