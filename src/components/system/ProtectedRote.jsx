import { useContext } from "react"; 
import { Authcontext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}){
    const {user} =useContext(Authcontext)
    if (!user) return <Navigate to="/login"/>
    return children
}