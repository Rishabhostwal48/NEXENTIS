import ComponentDoc from "./ComponentDoc";
import Badge from "../ui/Badge";
import { AlertTriangle, Check } from "lucide-react";

const codeExample = `
<Badge>Gray</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success" icon={Check}>Success</Badge>
<Badge variant="warning" icon={AlertTriangle}>Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge size="sm">Small Badge</Badge>
`;

export default function BadgeDoc() {
  return (
    <ComponentDoc
      title="Badges"
      description="Small status labels with variants and size options."
      code={codeExample}
    >
      <div className="flex flex-wrap gap-3">
        <Badge>Gray</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success" icon={Check}>
          Success
        </Badge>
        <Badge variant="warning" icon={AlertTriangle}>
          Warning
        </Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge size="sm">Small Badge</Badge>
      </div>
    </ComponentDoc>
  );
}
