import { StateCreator } from "zustand"
import { Recipe } from "../types"


export type FavoritesSliceType = {
    favorites: Recipe[];
    addToFavorites: (recipe: Recipe) => void;
    removeFromFavorites: (recipe: Recipe) => void;
    loadFromStorage: () => void;
}


export const createFavoritesSlice : StateCreator<FavoritesSliceType> = (set,get) => ({
    favorites: [],
    addToFavorites: (recipe) => {
        set((state) => ({
            favorites: [...state.favorites, recipe]
        }))
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    removeFromFavorites: (recipe) => {
        set((state) => ({
            favorites: state.favorites.filter((r) => r.idDrink !== recipe.idDrink)
        }))
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    loadFromStorage: () => {
        const favorites = localStorage.getItem('favorites')
        if(favorites) {
            set({
                favorites: JSON.parse(favorites)
            })
        }
    }
})