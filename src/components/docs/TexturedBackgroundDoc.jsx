import ComponentDoc from "./ComponentDoc";
import TexturedBackground from "../ui/TexturedBackground";
import { Card, CardTitle } from "../ui/Card";

const codeExample = `
import TexturedBackground from "./components/ui/TexturedBackground";

<TexturedBackground variant="dots" intensity="normal">
  <div className="p-8">
    Content with textured background
  </div>
</TexturedBackground>

<TexturedBackground variant="grid">
  <div className="p-8">Grid pattern</div>
</TexturedBackground>

<TexturedBackground variant="mesh">
  <div className="p-8">Mesh gradient</div>
</TexturedBackground>
`;

export default function TexturedBackgroundDoc() {
  return (
    <ComponentDoc
      title="Textured Background"
      description="Lightweight CSS-based textured background patterns. Multiple variants available including dots, grid, lines, gradients, and mesh patterns. Fully customizable and open source."
      code={codeExample}
      category="UI Component"
    >
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
            Variants
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Dots</p>
              <TexturedBackground variant="dots" className="h-24 rounded-lg border border-neutral-200 dark:border-neutral-800">
                <div className="h-full flex items-center justify-center text-sm text-neutral-600 dark:text-neutral-400">
                  Dots pattern
                </div>
              </TexturedBackground>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Grid</p>
              <TexturedBackground variant="grid" className="h-24 rounded-lg border border-neutral-200 dark:border-neutral-800">
                <div className="h-full flex items-center justify-center text-sm text-neutral-600 dark:text-neutral-400">
                  Grid pattern
                </div>
              </TexturedBackground>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Lines</p>
              <TexturedBackground variant="lines" className="h-24 rounded-lg border border-neutral-200 dark:border-neutral-800">
                <div className="h-full flex items-center justify-center text-sm text-neutral-600 dark:text-neutral-400">
                  Lines pattern
                </div>
              </TexturedBackground>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Gradient</p>
              <TexturedBackground variant="gradient" className="h-24 rounded-lg border border-neutral-200 dark:border-neutral-800">
                <div className="h-full flex items-center justify-center text-sm text-neutral-600 dark:text-neutral-400">
                  Gradient
                </div>
              </TexturedBackground>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Mesh</p>
              <TexturedBackground variant="mesh" className="h-24 rounded-lg border border-neutral-200 dark:border-neutral-800">
                <div className="h-full flex items-center justify-center text-sm text-neutral-600 dark:text-neutral-400">
                  Mesh gradient
                </div>
              </TexturedBackground>
            </div>
          </div>
        </div>
      </div>
    </ComponentDoc>
  );
}

