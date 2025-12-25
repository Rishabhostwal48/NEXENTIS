import ComponentDoc from "./ComponentDoc";
import Pricing from "../blocks/Pricing";

const codeExample = `
<Pricing/>
`;

export default function PricingDoc() {
  return (
    <ComponentDoc
      title="Pricing"
      description="Monetization-ready pricing block for Saas products."
      code={codeExample}
      category="Block"
    >
        <Pricing/>
    </ComponentDoc>
  );
}
