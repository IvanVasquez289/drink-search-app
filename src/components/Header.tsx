import { useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"
import Search from "./Search"

const Header = () => {
  const {pathname} = useLocation()
  const isHome = useMemo(() => pathname === '/', [pathname])
  return (
    <header className="bg-slate-800">
        <div className="mx-auto container px-5 py-10">
            <div className="flex justify-between items-center">
                <div>
                    <img src="/logo.svg" alt="imagen logo" className="w-32" />
                </div>
                <nav className="flex gap-4">
                    {/* Con Navlink tenemos la opcion de saber si estamos en la ruta actual 
                    y aplicar estilos en base a eso, si no queremos aplicar eso podemos usar Link solamente */}
                    <NavLink 
                      to={'/'} 
                      className={({isActive}) => 
                        isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                      }
                    >
                        Inicio
                    </NavLink>
                    <NavLink 
                      to={'/favoritos'} 
                      className={({isActive}) => 
                        isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                      }
                    >
                      Favoritos
                    </NavLink>
                </nav>
            </div>
            {isHome && <Search/>}
        </div>
    </header>
  )
}

export default Header