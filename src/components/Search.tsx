
const Search = () => {
  return (
    <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 p-5 rounded-md shadow-xl space-y-6 my-32">
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
            >
                <option value="">-- Selecciona --</option>
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