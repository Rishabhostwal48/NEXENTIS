import { createContext,useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children}) {
    const [theme , setTheme] = useState("light")

    useEffect(() => {
        const stored = localStorage.getItem("theme")
        if(stored)setTheme(stored)
    },[])

    useEffect(()=> {
        localStorage.setItem("theme", theme)
        document.documentElement.classList.toggle("dark", theme === "dark")
    },[theme])

    function toggleTheme(){
        setTheme(prev => (prev === "light" ? "dark" : "light"))
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}