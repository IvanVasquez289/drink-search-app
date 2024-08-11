import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService";
import { Categories, SearchFilters } from "../types";



export type RecipesSliceType = {
    categories: Categories;
    fetchCategories: () => Promise<void>;
    fetchRecipes: (searchFilters: SearchFilters) => Promise<void>;
}
export const createRecipeSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: [],
    },
    fetchCategories: async () => {
        const result = await getCategories()
        set({categories: result})
    },
    fetchRecipes: async (filters) => {
        console.log(filters)
    },

})