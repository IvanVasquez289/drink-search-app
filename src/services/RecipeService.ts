import axios from "axios"
import { CategoriesApiResponseSchema, DrinksSchema, RecipeAPIResponseSchema } from "../schemas/recipes-schema"
import { Drink, SearchFilters } from "../types"

export const getCategories = async () => {
    try {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
        const {data} = await axios(url)
        const result = CategoriesApiResponseSchema.safeParse(data)
        if(result.success) return result.data
    } catch (error) {
        console.log(error)
    }
}

export const getRecipes = async (filters: SearchFilters) => {
    try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingridient}`
        const {data} = await axios(url)
        const result = DrinksSchema.safeParse(data)
        if(result.success) return result.data
    } catch (error) {
        console.log(error)
    }
}

export const getDrinkById = async (idDrink: Drink["idDrink"]) => {
    try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
        const {data} = await axios(url)
        const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
        if(result.success) return result.data

    } catch (error) {
        console.log(error)
    }
}