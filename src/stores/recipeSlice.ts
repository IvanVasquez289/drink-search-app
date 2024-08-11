import { StateCreator } from "zustand"

type Category = {
    // name: string
}

export type RecipesSliceType = {
    categories: Category[]
}
export const createRecipeSlice: StateCreator<RecipesSliceType> = () => ({
    categories: [],
})