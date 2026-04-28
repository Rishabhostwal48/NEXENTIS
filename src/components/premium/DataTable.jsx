import { useMemo, useState } from "react"

export default function DataTable({
  columns,
  data,
  selectable = true,
  emptyText = "No data found",
  pageSize = 5,
}) {
  const [sort, setSort] = useState({ key: null, dir: "asc" })
  const [selected, setSelected] = useState([])
  const [search, setSearch] = useState("")
  const [filters, setFilters] = useState({})
  const [page, setPage] = useState(1)

  function toggleSort(key) {
    setSort(prev => ({
      key,
      dir: prev.key === key && prev.dir === "asc" ? "desc" : "asc",
    }))
  }

  function toggleRow(id) {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  function toggleAll(rows) {
    setSelected(
      selected.length === rows.length ? [] : rows.map(r => r.id)
    )
  }

  const filteredData = useMemo(() => {
    return data
      .filter(row =>
        Object.values(row).some(value =>
          String(value).toLowerCase().includes(search.toLowerCase())
        )
      )
      .filter(row =>
        Object.entries(filters).every(([key, value]) =>
          value ? String(row[key]) === value : true
        )
      )
  }, [data, search, filters])

  const sortedData = useMemo(() => {
    if (!sort.key) return filteredData
    return [...filteredData].sort((a, b) => {
      if (a[sort.key] < b[sort.key]) return sort.dir === "asc" ? -1 : 1
      if (a[sort.key] > b[sort.key]) return sort.dir === "asc" ? 1 : -1
      return 0
    })
  }, [filteredData, sort])

  const totalPages = Math.ceil(sortedData.length / pageSize)

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize
    return sortedData.slice(start, start + pageSize)
  }, [sortedData, page, pageSize])

  if (sortedData.length === 0) {
    return (
      <div className="rounded-xl border p-10 text-center text-gray-500">
        {emptyText}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => {
          setSearch(e.target.value)
          setPage(1)
        }}
        className="w-full rounded-md border px-3 py-2 text-sm"
      />

      <div className="overflow-hidden rounded-xl border">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              {selectable && (
                <th className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selected.length === paginatedData.length}
                    onChange={() => toggleAll(paginatedData)}
                  />
                </th>
              )}

              {columns.map(col => (
                <th key={col.key} className="px-4 py-3 text-left font-medium">
                  <div
                    onClick={() => col.sortable && toggleSort(col.key)}
                    className={`flex items-center gap-1 cursor-pointer ${
                      col.sortable ? "hover:text-black dark:hover:text-white" : ""
                    }`}
                  >
                    {col.label}
                    {sort.key === col.key && (
                      <span>{sort.dir === "asc" ? "↑" : "↓"}</span>
                    )}
                  </div>

                  {col.filter && (
                    <select
                      className="mt-2 w-full rounded border px-2 py-1 text-xs"
                      value={filters[col.key] || ""}
                      onChange={e => {
                        setFilters(prev => ({
                          ...prev,
                          [col.key]: e.target.value,
                        }))
                        setPage(1)
                      }}
                    >
                      <option value="">All</option>
                      {col.filter.options.map(opt => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedData.map(row => (
              <tr
                key={row.id}
                className="border-t hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {selectable && (
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selected.includes(row.id)}
                      onChange={() => toggleRow(row.id)}
                    />
                  </td>
                )}

                {columns.map(col => (
                  <td key={col.key} className="px-4 py-3">
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">
          Page {page} of {totalPages}
        </span>

        <div className="flex gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
            className="rounded border px-3 py-1 disabled:opacity-50"
          >
            Prev
          </button>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(p => p + 1)}
            className="rounded border px-3 py-1 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
