import ComponentDoc from "./ComponentDoc";
import ScrollReveal from "../ui/ScrollReveal";
import { Card, CardTitle } from "../ui/Card";

const codeExample = `
import ScrollReveal from "./components/ui/ScrollReveal";

<ScrollReveal direction="up" delay={0}>
  <div>Content that animates in on scroll</div>
</ScrollReveal>

<ScrollReveal direction="left" delay={100}>
  <div>Staggered animation</div>
</ScrollReveal>

<ScrollReveal direction="fade">
  <div>Fade in effect</div>
</ScrollReveal>
`;

export default function ScrollRevealDoc() {
  return (
    <ComponentDoc
      title="Scroll Reveal"
      description="Scroll-triggered reveal animations using Intersection Observer. Lightweight, performant, and open source. Supports multiple directions and staggered delays."
      code={codeExample}
      category="UI Component"
    >
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
            Directions
          </h3>
          <div className="space-y-4">
            <ScrollReveal direction="up">
              <Card>
                <CardTitle>Up Animation</CardTitle>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Animates from bottom to top
                </p>
              </Card>
            </ScrollReveal>
            <ScrollReveal direction="down" delay={100}>
              <Card>
                <CardTitle>Down Animation</CardTitle>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Animates from top to bottom
                </p>
              </Card>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200}>
              <Card>
                <CardTitle>Left Animation</CardTitle>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Animates from right to left
                </p>
              </Card>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={300}>
              <Card>
                <CardTitle>Right Animation</CardTitle>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Animates from left to right
                </p>
              </Card>
            </ScrollReveal>
            <ScrollReveal direction="fade" delay={400}>
              <Card>
                <CardTitle>Fade Animation</CardTitle>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Simple fade in effect
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </ComponentDoc>
  );
}

