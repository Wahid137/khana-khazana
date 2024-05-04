import BannerSection from "@/app/components/details/BannerSection";
import Steps from "@/app/components/details/Steps";

const DetailsPage = async ({ params: { id } }) => {
    const recipeInfo = await getRecipeById(id)
    return (
        <>
            <BannerSection />
            <Steps />
        </>
    );
};

export default DetailsPage;