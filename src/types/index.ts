import { z } from "zod";
import { CategoriesApiResponseSchema, DrinksSchema, SearchFiltersSchema } from "../schemas/recipes-schema";

export type Categories = z.infer<typeof CategoriesApiResponseSchema>

export type SearchFilters = z.infer<typeof SearchFiltersSchema>

export type Drinks = z.infer<typeof DrinksSchema>