import { StateCreator } from "zustand"
import AIService from "../services/AIService";

export type AISliceType = {
    recipeAI: string;
    generateRecipe: (promt: string) => Promise<void>;
    isGenerating: boolean
}
export const createAISlice: StateCreator<AISliceType> = (set) => ({
    recipeAI: "",
    isGenerating: false,
    generateRecipe: async (prompt) => {
        set({recipeAI: "", isGenerating: true})
        const data = await AIService.generateRecipe(prompt)
        for await (const textPart of data) {
            set(state => ({recipeAI: state.recipeAI + textPart}))
        }
        set({isGenerating: false})
    }
})