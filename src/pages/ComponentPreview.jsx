import { useParams } from "react-router-dom"

export default function ComponentPreview() {
  const { name } = useParams()

  return (
    <div className="p-8">
      Preview: {name}
    </div>
  )
}
