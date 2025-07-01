import { StateCreator } from "zustand"
import AIService from "../services/AIService";

export type AISliceType = {
    recipeAI: string;
    generateRecipe: (promt: string) => Promise<void>
}
export const createAISlice: StateCreator<AISliceType> = (set) => ({
    recipeAI: "",
    generateRecipe: async (prompt) => {
        const data = await AIService.generateRecipe(prompt)
        for await (const textPart of data) {
            set(state => ({recipeAI: state.recipeAI + textPart}))
        }
    }
})