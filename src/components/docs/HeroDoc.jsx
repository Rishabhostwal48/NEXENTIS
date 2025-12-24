import ComponentDoc from "./ComponentDoc";
import Hero from "../blocks/Hero";

const codeExample = `
<Hero
  title="Build Better UI"
  subtitle="Production-grade React + Tailwind components you can copy and ship."
  image="https://picusum.photos/430"
/>
`;

export default function HeroDoc() {
  return (
    <ComponentDoc
      title="Hero Block"
      description="Marketing-focused landing header with title, subtitle,CTAs and optional image."
      code={codeExample}
    >
      <Hero
        title="Build Better UI"
        subtitle="Production-grade React + Tailwind components you can copy and ship."
        image="https://picusum.photos/430"
      />
    </ComponentDoc>
  );
}
