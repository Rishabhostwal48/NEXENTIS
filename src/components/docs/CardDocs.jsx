import ComponentDoc from "./ComponentDoc"
import { Card, CardTitle, CardDescription, CardFooter, CardMedia } from "../ui/Card"
import Button from "../ui/Button"

const codeExample = `
<Card>
  <CardTitle>Card Title</CardTitle>
  <CardDescription>This is a card component.</CardDescription>
  <CardFooter>
    <Button size="sm">Action</Button>
  </CardFooter>
</Card>
`

export default function CardsDoc() {
  return (
    <ComponentDoc
      title="Cards"
      description="Flexible card layout component."
      code={codeExample}
    >
      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardTitle>Basic Card</CardTitle>
          <CardDescription>Simple card usage.</CardDescription>
        </Card>

        <Card>
          <CardMedia src="https://picsum.photos/300" />
          <CardTitle>Card with Image</CardTitle>
          <CardDescription>Media slot supported.</CardDescription>
          <CardFooter>
            <Button size="sm">Buy</Button>
          </CardFooter>
        </Card>
      </div>
    </ComponentDoc>
  )
}
