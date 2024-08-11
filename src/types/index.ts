import { z } from "zod";
import { CategoriesApiResponseSchema, SearchFiltersSchema } from "../schemas/recipes-schema";

export type Categories = z.infer<typeof CategoriesApiResponseSchema>

export type SearchFilters = z.infer<typeof SearchFiltersSchema>