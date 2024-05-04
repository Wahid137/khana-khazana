import BannerSection from "@/app/components/details/BannerSection";
import Steps from "@/app/components/details/Steps";
import { getRecipeById } from "@/db/queries";


export async function generateMetadata({ params: { id } }) {
    const recipeInfo = await getRecipeById(id);

    return {
        title: `Khana khazana - ${recipeInfo?.name}`,
        description: recipeInfo?.description,
        openGraph: {
            images: [recipeInfo?.thumbnails]
        }
    }
}


const DetailsPage = async ({ params: { id } }) => {
    const recipeInfo = await getRecipeById(id)

    return (
        <>
            <BannerSection recipeInfo={recipeInfo} />
            <Steps recipeInfo={recipeInfo} />
        </>
    );
};

export default DetailsPage;