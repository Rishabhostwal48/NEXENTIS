import { useState } from "react";
import ComponentDoc from "./ComponentDoc";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

const codeExample = `
const [open, setOpen] = useState(false)

<Modal open={open} onClose={() => setOpen(false)} title="COnfirm">
    Modal content here
</Modal>
`


export default function ModalDoc(){
    const [open,setOpen] = useState(false)

    return(
        <ComponentDoc
           title="Modal"
           description="Dialog component for confirmations, froms and alerts."
           code={codeExample}
        >
            <Button onClick={() => setOpen(true)}>Open Modal</Button>

            <Modal open={open} onClose={()=> setOpen(false)} title="Example Modal">
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                    This is a reusable modal component.
                </p>
                <Button onClick={() => setOpen(false)}>Close</Button>
            </Modal>
        </ComponentDoc>
    )
}