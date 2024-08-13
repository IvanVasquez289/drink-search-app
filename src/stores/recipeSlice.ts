import { StateCreator } from "zustand"
import { getCategories, getDrinkById, getRecipes } from "../services/RecipeService";
import { Categories, Drink, Drinks, Recipe, SearchFilters } from "../types";



export type RecipesSliceType = {
    categories: Categories;
    drinks: Drinks;
    recipe: Recipe;
    fetchCategories: () => Promise<void>;
    fetchRecipes: (searchFilters: SearchFilters) => Promise<void>;
    fetchDrink: (idDrink: Drink["idDrink"]) => Promise<void>;
}
export const createRecipeSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: [],
    },
    drinks: {
        drinks: [],
    },
    recipe: {} as Recipe,
    fetchCategories: async () => {
        const result = await getCategories()
        set({categories: result})
    },
    fetchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({drinks})
    },
    fetchDrink: async (idDrink) => {
        const recipe = await getDrinkById(idDrink)
        set({recipe})
    },

})