import ComponentDoc from "./ComponentDoc";
import { useToast } from "../../context/ToastContext";
import Button from "../ui/Button";

export default function ToastDoc(){
    const {toast}=useToast()

    return(
        <ComponentDoc
           title="Toast"
           description="Global notification system for success, error and info messages."
           code={`toast.success("Saved)`}
        >
            <div className="flex gap-4">
                <Button onClick={() => toast.success("Success toast")}>Success</Button>
                <Button onClick={() => toast.error("Error toast")}>Error</Button>
                <Button onClick={() => toast.info("Info toast")}>Info</Button>
            </div>
        </ComponentDoc>
    )
}