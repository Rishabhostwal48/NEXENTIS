/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/set-state-in-effect */
import { createContext,useContext,useEffect,useState } from "react";
import { Authcontext } from "./AuthContext";

export const FavoritesContext = createContext()

export function FavoritesProvider({children}) {
    const [favorites ,setFavorites] =useState([])
    const {user} = useContext(Authcontext)
    const key = user ?`favorites_${user.email}`:"favorites_guest"

    useEffect(() => {
        const stored = localStorage.getItem(key)
        if (!stored) {
            setFavorites([])
            return
        }
        try {
            const parsed = JSON.parse(stored)
            setFavorites(Array.isArray(parsed) ? parsed : [])
        } catch {
            setFavorites([])
        }
    }, [key])

    useEffect(() =>{
        localStorage.setItem(key,JSON.stringify(favorites))
    },[favorites, key])

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
