import BannerSection from "@/app/components/details/BannerSection";
import Steps from "@/app/components/details/Steps";
import { getRecipeById } from "@/db/queries";

const DetailsPage = async ({ params: { id } }) => {
    const recipeInfo = await getRecipeById(id)

    return (
        <>
            <BannerSection recipeInfo={recipeInfo} />
            <Steps />
        </>
    );
};

export default DetailsPage;