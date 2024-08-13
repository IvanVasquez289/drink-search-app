import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"

const IndexPage = () => {
  const drinks = useAppStore(state => state.drinks)
  const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks])
  return (
    <>
      <h1 className="text-6xl font-extrabold">Bebidas</h1>
      {hasDrinks ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {drinks.drinks.map(drink => (
            <DrinkCard
              key={drink.idDrink}
              drink={drink}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-2xl py-10">
          No hay resultados aun, usa el formulario para buscar recetas
        </p>
      )}
    </>
  )
}

export default IndexPage