import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";

const BannerSection = () => {
  return (
    <section>
      <div class="grid grid-cols-12 container gap-8 justify-items-center">
        <BannerImage />
        <BannerContent />
      </div>
    </section>
  );
};

export default BannerSection;
