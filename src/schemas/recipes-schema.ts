import { z } from "zod";

export const CategoriesApiResponseSchema = z.object({
    drinks: z.array(z.object({
        strCategory: z.string()
    }))
})

export const SearchFiltersSchema = z.object({
    ingridient: z.string(),
    category: z.string()
})