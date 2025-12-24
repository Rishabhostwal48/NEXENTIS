import { createContext,useContext,useEffect,useState } from "react";
import { Authcontext } from "./AuthContext";

export const FavoritesContext = createContext()

export function FavoritesProvider({children}) {
    const [favorites ,setFavorites] =useState([])
    const {user} = useContext(Authcontext)
    const key = user ?`favorites_${user.email}`:"favorites_guest"
    const stored = localStorage.getItem(key)

    useEffect(() =>{
        localStorage.setItem(key,JSON.stringify(favorites))
    },[favorites])

    function toggleFavorite(item){
        setFavorites(prev =>
            prev.find(f => f.path === item.path)
            ? prev.filter(f => f.path !== item.path)
            :  [...prev, item]
        )
    }

    function isFavorite(path){
        return favorites.some(f => f.path === path)
    }

    return(
        <FavoritesContext.Provider
            value={{favorites, toggleFavorite,isFavorite}}
        >
            {children}
        </FavoritesContext.Provider>
    )
}