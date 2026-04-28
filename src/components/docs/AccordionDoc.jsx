import ComponentDoc from "./ComponentDoc";
import { Accordion } from "../ui/Accordion";

const codeExample = `
const items = [
  { title: "What is Nexentis?", content: "A React + Tailwind UI system you can copy and ship." },
  { title: "Is it accessible?", content: "Components are designed with keyboard + focus in mind." },
  { title: "Can I customize it?", content: "Yes. Tailwind-first, easy to theme and extend." },
]

<Accordion items={items} />
`;

export default function AccordionDoc() {
  const items = [
    { title: "What is Nexentis?", content: "A React + Tailwind UI system you can copy and ship." },
    { title: "Is it accessible?", content: "Components are designed with keyboard + focus in mind." },
    { title: "Can I customize it?", content: "Yes. Tailwind-first, easy to theme and extend." },
  ];

  return (
    <ComponentDoc
      title="Accordion"
      description="Expandable/collapsible content sections with smooth height transitions."
      code={codeExample}
      category="UI Component"
    >
      <div className="max-w-2xl">
        <Accordion items={items} />
      </div>
    </ComponentDoc>
  );
}

