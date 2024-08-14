import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

const FavoritesPage = () => {
  const favorites = useAppStore(state => state.favorites)
  const hasFavorites = useMemo(() => favorites.length , [favorites])
  return (
    <>
        <h1 className="text-6xl font-extrabold">Favoritos</h1>
        {hasFavorites ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            {favorites.map(drink => (
              <DrinkCard
                key={drink.idDrink}
                drink={drink}
              />
            ))}
          </div>

        ) : (
          <p className="text-center text-2xl py-10">
            Tus bebidas favoritas apareceran aqui
          </p>
        )}
    </>
  )
}

export default FavoritesPage