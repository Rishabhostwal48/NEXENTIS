import { useState } from "react";
import { searchIndex } from "../data/searchIndex";
import { Link } from "react-router-dom";
import { SearchIcon, Component, FileText } from "lucide-react";
import Badge from "../components/ui/Badge";

export default function Search() {
    const [term, setTerm] = useState("")

    const results = searchIndex.filter(item =>
        item.label.toLowerCase().includes(term.toLowerCase())
    )

    return (
        <div className="p-6 md:p-8 lg:p-12 max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
                    Search Components
                </h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    Find components and documentation quickly
                </p>
            </div>

            {/* Search Input */}
            <div className="relative">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                <input 
                    type="text"
                    placeholder="Search components..."
                    className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-12 py-3.5 text-base placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-50 focus:border-transparent transition-all"
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    autoFocus
                />
            </div>

            {/* Results */}
            <div className="space-y-3">
                {term.length === 0 && (
                    <div className="text-center py-12">
                        <SearchIcon size={48} className="mx-auto text-neutral-300 dark:text-neutral-700 mb-4" />
                        <p className="text-neutral-500 dark:text-neutral-400">
                            Start typing to search for components
                        </p>
                    </div>
                )}

                {results.length === 0 && term.length > 0 && (
                    <div className="text-center py-12">
                        <Component size={48} className="mx-auto text-neutral-300 dark:text-neutral-700 mb-4" />
                        <p className="text-lg font-medium text-neutral-900 dark:text-neutral-50 mb-2">
                            No results found
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            Try a different search term
                        </p>
                    </div>
                )}

                {results.length > 0 && (
                    <div className="space-y-2">
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                            {results.length} {results.length === 1 ? 'result' : 'results'} found
                        </p>
                        {results.map(r => (
                            <Link
                                key={r.path}
                                to={r.path}
                                className="flex items-center justify-between rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-6 py-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-md transition-all duration-normal hover-lift group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-800 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
                                        <FileText size={18} className="text-neutral-700 dark:text-neutral-300" />
                                    </div>
                                    <div>
                                        <span className="font-medium text-neutral-900 dark:text-neutral-50 block">
                                            {r.label}
                                        </span>
                                        <span className="text-sm text-neutral-500 dark:text-neutral-400">
                                            Component
                                        </span>
                                    </div>
                                </div>
                                <Badge variant="secondary" className="text-xs">
                                    {r.type}
                                </Badge>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}