import ComponentDoc from "../../components/docs/ComponentDoc"
import DataTable from "../../components/premium/DataTable"
import Badge from "../../components/ui/Badge"

const columns = [
  { key: "name", label: "Name", sortable: true },
  { key: "email", label: "Email" },
  {
    key: "status",
    label: "Status",
    filter: {
      options: ["Active", "Inactive"],
    },
    render: row => (
      <Badge variant={row.status === "Active" ? "success" : "gray"}>
        {row.status}
      </Badge>
    ),
  },
]

const data = [
  { id: 1, name: "Rishabh", email: "rishabh@mail.com", status: "Active" },
  { id: 2, name: "Aman", email: "aman@mail.com", status: "Inactive" },
  { id: 3, name: "Neha", email: "neha@mail.com", status: "Active" },
]

export default function DataTableDoc() {
  return (
    <ComponentDoc
      title="Data Table"
      description="Advanced data table with search, filters, sorting and selection."
      code={`<DataTable columns={columns} data={data} />`}
      category="Premium"
    >
      <DataTable columns={columns} data={data} pageSize={3} />
    </ComponentDoc>
  )
}
