"use server";

import { createUser, findUserByCredentials, updateFavorite } from "@/db/queries";
import { redirect } from "next/navigation";


async function registerUser(formData) {
    const user = Object.fromEntries(formData);
    user.favourites = []
    console.log(user)
    const created = await createUser(user);
    redirect("/login");
}

async function performLogin(formData) {
    try {
        const credential = {};
        credential.email = formData.get("email");
        credential.password = formData.get("password");
        const found = await findUserByCredentials(credential);
        return found;
    } catch (error) {
        throw error;
    }
}

async function addFavoriteRecipe(recipeId, authId) {
    try {
        await updateFavorite(recipeId, authId);
    } catch (error) {
        throw error;
    }
    revalidatePath('/');
}





export { addFavoriteRecipe, performLogin, registerUser };

