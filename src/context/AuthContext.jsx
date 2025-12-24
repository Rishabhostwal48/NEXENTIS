import { createContext,useEffect,useState } from "react";

export const Authcontext = createContext()

export function AuthProvider({children}){
    const [user,setUser] = useState(null)

    useEffect(() => {
        const stored = localStorage.getItem("user")
        if (stored) setUser(JSON.parse(stored))
    },[])

    function login(email){
        const userData = {email}
        setUser(userData)
        localStorage.setItem("user",JSON.stringify(userData))
    }

    function logout(){
        setUser(null)
        localStorage.removeItem("user")
    }

    return(
        <Authcontext.Provider value={{user,login,logout}}>
            {children}
        </Authcontext.Provider>
    )
}