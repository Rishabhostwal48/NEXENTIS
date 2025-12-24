import { useContext, useState } from "react";
import { Authcontext } from "../context/AuthContext";
import Button from "../components/ui/Button";

export default function Login(){
    const{login} = useContext(Authcontext)
    const[email, setEmail] =useState("")

    function handleSubmit(e){
        e.preventDefault()
        login(email)
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm rounded-xl border p-6 bg-white dark:bg-gray-800"
            >
                <h1 className="text-xl font-semibold mb-4">Login</h1>

                <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full mb-4 rounded border px-3 py-2 dark:bg-gray-900"
                />

                <Button className="w-full">Login</Button>
            </form>
        </div>
    )
}