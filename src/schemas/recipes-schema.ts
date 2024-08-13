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

export const DrinkSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
})

export const DrinksSchema = z.object({
    drinks: z.array(DrinkSchema)
})