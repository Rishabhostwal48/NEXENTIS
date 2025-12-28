import { useContext, useState } from "react";
import { Authcontext } from "../context/AuthContext";
import Button from "../components/ui/Button";
import { Mail, Lock } from "lucide-react";

export default function Login(){
    const{login} = useContext(Authcontext)
    const[email, setEmail] = useState("")
    const[isSubmitting, setIsSubmitting] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        setIsSubmitting(true)
        login(email)
        setTimeout(() => setIsSubmitting(false), 500)
    }

    return (
        <div className="min-h-[calc(100vh-73px)] flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
                        Welcome back
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Sign in to access your favorites
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 p-8 bg-white dark:bg-neutral-900 shadow-lg"
                >
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                Email address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-10 py-3 text-base placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-50 focus:border-transparent transition-all"
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <Button 
                            className="w-full" 
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Signing in..." : "Sign in"}
                        </Button>
                    </div>
                </form>

                <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-6">
                    Enter any email to continue. This is a demo login.
                </p>
            </div>
        </div>
    )
}