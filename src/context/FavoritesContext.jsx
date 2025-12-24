import { createContext,useEffect,useState } from "react";

export const FavoritesContext = createContext()

export function FavoritesProvider({children}) {
    const [favorites ,setFavorites] =useState([])

    useEffect(() =>{
        localStorage.setItem("favorites",JSON.stringify(favorites))
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