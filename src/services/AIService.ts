import { streamText } from "ai"
import { openRouter } from "../lib/ai"

export default {
    async generateRecipe(prompt: string) {
       const result = streamText({
           model: openRouter("meta-llama/llama-3.2-1b-instruct:free"),
           prompt,
       })
       return result.textStream
    }
}