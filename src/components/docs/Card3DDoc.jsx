import ComponentDoc from "./ComponentDoc";
import Card3D from "../ui/Card3D";
import { Card, CardTitle, CardDescription } from "../ui/Card";

const codeExample = `
import Card3D from "./components/ui/Card3D";

<Card3D intensity={3}>
  <Card>
    <CardTitle>3D Card</CardTitle>
    <CardDescription>
      Hover to see the 3D effect
    </CardDescription>
  </Card>
</Card3D>
`;

export default function Card3DDoc() {
  return (
    <ComponentDoc
      title="3D Card"
      description="Lightweight 3D card effect using pure CSS transforms. No Three.js dependency. Tilt effect on hover. Fully customizable intensity."
      code={codeExample}
      category="UI Component"
    >
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
            Interactive 3D Cards
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
            Hover over the cards to see the 3D tilt effect
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card3D intensity={2}>
              <Card className="h-full">
                <CardTitle>Low Intensity</CardTitle>
                <CardDescription>
                  Subtle 3D effect with intensity={2}
                </CardDescription>
              </Card>
            </Card3D>
            <Card3D intensity={3}>
              <Card className="h-full">
                <CardTitle>Medium Intensity</CardTitle>
                <CardDescription>
                  Standard 3D effect with intensity={3}
                </CardDescription>
              </Card>
            </Card3D>
            <Card3D intensity={5}>
              <Card className="h-full">
                <CardTitle>High Intensity</CardTitle>
                <CardDescription>
                  Strong 3D effect with intensity={5}
                </CardDescription>
              </Card>
            </Card3D>
          </div>
        </div>
      </div>
    </ComponentDoc>
  );
}

