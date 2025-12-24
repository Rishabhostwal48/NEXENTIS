import { useState } from "react";
import { searchIndex } from "../data/searchIndex";
import { Link } from "lucide-react";

export default function Search() {
    const [term,setTerm] = useState("")


    const results = searchIndex.filter(item =>
        item.label.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    )

    return (
        <div className="p-8 max-w-3xl mx-auto space-y-6">
            <input 
              type="text"
              placeholder="Search components..."
              className="w-full rounded-md border px-4 py-2"
              value={term}
              onChange={e => setTerm(e.target.value)}
              />

              <div className="space-y-3">
                {results.length === 0 && term.length > 0 &&(
                    <p className="text-gray-500">No results found.</p>
                )}

                {results.map(r =>(
                    <Link
                       key={r.path}
                       to={r.path}
                       className="flex justify-between rounded border px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                        <span>{r.label}</span>
                        <span className="text-gray-500 text-sm">{r.type}</span>
                    </Link>
                ))}
              </div>
        </div>
    )
}