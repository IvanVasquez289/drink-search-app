import { StateCreator } from "zustand"

export type AISliceType = {
    recipeAI: string;
    generateRecipe: (promt: string) => Promise<void>
}
export const createAISlice: StateCreator<AISliceType> = () => ({
    recipeAI: "",
    generateRecipe: async (prompt) => {
        console.log(prompt)
    }
})