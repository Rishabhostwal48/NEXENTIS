import Button from "../../components/ui/Button";
import ComponentDoc from "./ComponentDoc";

const codeExample =`
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
`


export default function ButtonDocs(){
    return(
        <ComponentDoc
            title="Buttons"
            description="Reusable button component with variants and sizes."
            code={codeExample}
            >
                <div className="flex gap-3">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                </div>
            </ComponentDoc>
    )
}