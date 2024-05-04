import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";

const BannerSection = ({ recipeInfo }) => {
  const handleShareButtonClick = (platform) => {
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          window.location.href
        )}`;
        break;
      case "twitter":
        const tweetText = `Check out this recipe: ${recipeInfo.name}`;
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          tweetText
        )}&url=${encodeURIComponent(window.location.href)}`;
        break;
      case "pinterest":
        const description = encodeURIComponent(recipeInfo.description);
        const media = encodeURIComponent(recipeInfo.image);
        shareUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
          window.location.href
        )}&media=${media}&description=${description}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank");
  };

  return (
    <section>
      <div className="grid grid-cols-12 container gap-8 justify-items-center">
        <BannerImage recipeInfo={recipeInfo} />
        <BannerContent
          recipeInfo={recipeInfo}
          handleShareButtonClick={handleShareButtonClick}
        />
      </div>
    </section>
  );
};

export default BannerSection;
