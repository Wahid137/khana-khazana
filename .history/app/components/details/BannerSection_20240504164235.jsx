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
      // Add cases for other platforms like Twitter, Pinterest, etc.

      default:
        return;
    }

    // Open the share URL in a new window
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
