import { z } from "zod";
import { CategoriesApiResponseSchema } from "../schemas/recipes-schema";

export type Categories = z.infer<typeof CategoriesApiResponseSchema>