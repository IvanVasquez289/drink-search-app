import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService";
import { Categories, Drinks, SearchFilters } from "../types";



export type RecipesSliceType = {
    categories: Categories;
    drinks: Drinks;
    fetchCategories: () => Promise<void>;
    fetchRecipes: (searchFilters: SearchFilters) => Promise<void>;
}
export const createRecipeSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: [],
    },
    drinks: {
        drinks: [],
    },
    fetchCategories: async () => {
        const result = await getCategories()
        set({categories: result})
    },
    fetchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({drinks})
    },

})