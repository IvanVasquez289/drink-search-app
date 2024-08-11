import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService";
import { Categories } from "../types";



export type RecipesSliceType = {
    categories: Categories;
    fetchCategories: () => Promise<void>;
}
export const createRecipeSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: [],
    },
    fetchCategories: async () => {
        const result = await getCategories()
        set({categories: result})
    }
})