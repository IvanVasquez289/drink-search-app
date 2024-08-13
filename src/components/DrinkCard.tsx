import { useAppStore } from "../stores/useAppStore";
import { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink;
}
const DrinkCard = ({drink}: DrinkCardProps) => {
  const fetchDrinkById = useAppStore(state => state.fetchDrink)
  return (
    <div className="p-5 shadow-lg space-y-2 border">
        <div className="overflow-hidden">
            <img 
                src={drink.strDrinkThumb} 
                alt={`imagen bebida ${drink.strDrink}`} 
                className="hover:scale-125 transition-transform hover:rotate-3"
            />
        </div>
        <div className="space-y-2">
            <p className="text-2xl font-bold truncate">{drink.strDrink}</p>
            <button
                className="bg-orange-400 w-full p-3 text-white uppercase font-bold"
                onClick={() => fetchDrinkById(drink.idDrink)}
            >
                Ver receta
            </button>
        </div>
    </div>
  )
}

export default DrinkCard