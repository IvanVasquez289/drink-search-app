import { useState } from "react"
import { useAppStore } from "../stores/useAppStore"
// import Alert from "./Alert"

const Search = () => {
    const [searchFilters, setSearchFilters] = useState({
        ingridient: '',
        category: ''
    })
    // const [error, setError] = useState(false)
    const {drinks} = useAppStore(state => state.categories)
    const fetchRecipes = useAppStore(state => state.fetchRecipes)
    const showNotification = useAppStore(state => state.showNotification)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(searchFilters.ingridient.trim() === '' || searchFilters.category.trim() === '') {
            showNotification({
                message: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
        fetchRecipes(searchFilters)
    }

  return (
    <form 
        className="md:w-1/2 2xl:w-1/3 bg-orange-400 p-5 rounded-md shadow-xl space-y-6 my-32"
        onSubmit={handleSubmit}
    >
        {/* {error && <Alert>Por favor llena todos los campos</Alert>} */}
        <div className="flex flex-col space-y-2">
            <label 
                htmlFor="ingridient"
                className="text-white uppercase font-bold"
            >
                Nombre o ingredientes
            </label>
            <input 
                type="text" 
                name="ingridient" 
                id="ingridient"
                className="p-2 rounded-md focus:outline-none"
                placeholder="Nombre o ingrediente. Ej. Vodka, Tequila, etc."
                onChange={handleChange}
                value={searchFilters.ingridient}

            />
        </div>
        <div className="flex flex-col space-y-2">
            <label 
                htmlFor="category"
                className="text-white uppercase font-bold"
            >
                Categoria
            </label>
            <select
                name="category"
                id="category"
                className="p-2 rounded-md focus:outline-none"
                onChange={handleChange}
                value={searchFilters.category}
            >
                <option value="">-- Selecciona --</option>
                {drinks.map(category => (
                    <option value={category.strCategory} key={category.strCategory}>
                        {category.strCategory}
                    </option>
                ))}
            </select>
        </div>
       <input 
            type="submit" 
            value="Buscar receta" 
            className="w-full cursor-pointer bg-orange-800 hover:bg-orange-900 transition-colors text-white uppercase font-extrabold p-2 rounded-md" 
        />
    </form>
  )
}

export default Search