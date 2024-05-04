import Image from "next/image";

const BannerImage = () => {
  return (
    <div class="col-span-12 md:col-span-6">
      <Image
        src="https://source.unsplash.com/Zh0mYmMBZjQ/600x600"
        alt="banner"
        class="w-full h-full rounded-lg object-contain"
        width={200}
        height={100}
      />
    </div>
  );
};

export default BannerImage;
