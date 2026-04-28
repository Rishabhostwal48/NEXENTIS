import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { Card, CardTitle, CardDescription } from "../components/ui/Card";
import Modal from "../components/ui/Modal";

export const playgroundRegistry = [
  {
    id: "button",
    name: "Button",
    description: "Brand gradients, glass secondary, and outline with gradient border.",
    defaultProps: { label: "Upgrade", variant: "primary", size: "md", disabled: false },
    controls: [
      { key: "label", label: "Label", type: "text" },
      { key: "variant", label: "Variant", type: "select", options: ["primary", "secondary", "outline"] },
      { key: "size", label: "Size", type: "select", options: ["sm", "md", "lg"] },
      { key: "disabled", label: "Disabled", type: "boolean" },
    ],
    render: (props) => (
      <Button variant={props.variant} size={props.size} disabled={props.disabled}>
        {props.label}
      </Button>
    ),
  },
  {
    id: "badge",
    name: "Badge",
    description: "Status, label, and accent chips.",
    defaultProps: { label: "Pro", variant: "primary", size: "md" },
    controls: [
      { key: "label", label: "Label", type: "text" },
      {
        key: "variant",
        label: "Variant",
        type: "select",
        options: ["gray", "secondary", "primary", "success", "warning", "danger"],
      },
      { key: "size", label: "Size", type: "select", options: ["sm", "md"] },
    ],
    render: (props) => (
      <Badge variant={props.variant} size={props.size}>
        {props.label}
      </Badge>
    ),
  },
  {
    id: "card",
    name: "Card",
    description: "Base surface primitive for dashboards.",
    defaultProps: { title: "Monthly usage", description: "All metrics are real-time and exportable." },
    controls: [
      { key: "title", label: "Title", type: "text" },
      { key: "description", label: "Description", type: "text" },
    ],
    render: (props) => (
      <Card className="max-w-md">
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </Card>
    ),
  },
  {
    id: "modal",
    name: "Modal",
    description: "Overlay + focus-friendly dialog.",
    defaultProps: { title: "Invite team", size: "md" },
    controls: [
      { key: "title", label: "Title", type: "text" },
      { key: "size", label: "Size", type: "select", options: ["sm", "md", "lg"] },
    ],
    render: (props, helpers) => (
      <>
        <Button onClick={() => helpers.setOpen(true)}>Open modal</Button>
        <Modal open={helpers.open} onClose={() => helpers.setOpen(false)} title={props.title} size={props.size}>
          <div className="space-y-3">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              This is a preview. Hook it into your app logic however you like.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={() => helpers.setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => helpers.setOpen(false)}>Invite</Button>
            </div>
          </div>
        </Modal>
      </>
    ),
  },
];

