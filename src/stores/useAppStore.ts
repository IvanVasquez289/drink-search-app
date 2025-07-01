import { create } from "zustand";
import { createRecipeSlice, RecipesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";
import { createNotifictionSlice, NotificationSliceType } from "./notificationSlice";
import { AISliceType, createAISlice } from "./aiSlice";


export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType & AISliceType>()(
    devtools(
        (...a) => ({
            ...createRecipeSlice(...a),
            ...createFavoritesSlice(...a),
            ...createNotifictionSlice(...a),
            ...createAISlice(...a)
        })
    )
)
