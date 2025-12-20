import { useState } from "react";

export default function ComponentDoc({ title, description, code, children}) {
    const [copied, setCopied] = useState(false)

    function copyCode() {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return(
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-gray-500">{description}</p>
            </div>

            <div className="rounded-md border p-6 bg-white shadow-sm">
                {children}
            </div>

            <div className="relative">
                <button
                   onClick={copyCode}
                   className="absolute right-2 top-2 rounded bg-gray-200 px-2 py-1 text-xs"
                >{copied ? "Copied!" : "Copy"}
                </button>

                <pre className="overflow-auto rounded bg-gray-900 p-4 text-sm text-white">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    )
}