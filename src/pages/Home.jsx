import { Link } from "react-router-dom";
import {
  Code,
  CreditCard,
  GalleryVerticalEnd,
  Layers,
  Monitor,
  Shield,
  Sparkles,
  SquareGanttChart,
  Tag,
  Zap,
} from "lucide-react";
import Hero from "../components/blocks/Hero.jsx";
import Pricing from "../components/blocks/Pricing";
import { Card, CardTitle, CardDescription } from "../components/ui/Card";
import Button from "../components/ui/Button";
import TexturedBackground from "../components/ui/TexturedBackground";
import ScrollReveal from "../components/ui/ScrollReveal";
import Card3D from "../components/ui/Card3D";

const features = [
  {
    icon: Code,
    title: "Copy & Paste",
    description:
      "Zero dependencies. Zero npm installs. Just copy the code and watch it work. It's that simple.",
  },
  {
    icon: Sparkles,
    title: "Beautiful by Default",
    description:
      "Every component is crafted with attention to detail. Beautiful out of the box, infinitely customizable.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built on Tailwind CSS and React. No bloat, no compromise. Pure performance and developer experience.",
  },
  {
    icon: Shield,
    title: "Battle-Tested",
    description:
      "Production-ready components with accessibility built-in. Dark mode, responsive, and accessible by default.",
  },
];

const components = [
  {
    name: "Buttons",
    path: "/docs/buttons",
    icon: SquareGanttChart,
    description: "Multiple variants and sizes",
  },
  {
    name: "Cards",
    path: "/docs/cards",
    icon: GalleryVerticalEnd,
    description: "Flexible card components",
  },
  { name: "Badges", path: "/docs/badges", icon: Tag, description: "Status and label badges" },
  { name: "Modals", path: "/docs/modal", icon: Monitor, description: "Dialog and modal components" },
  { name: "Hero", path: "/docs/hero", icon: Layers, description: "Hero sections" },
  { name: "Pricing", path: "/docs/pricing", icon: CreditCard, description: "Pricing table layouts" },
];

export default function Home() {
  return (
    <main className="space-y-24">
      <section className="relative overflow-hidden bg-white dark:bg-neutral-900">
        <TexturedBackground variant="dots" intensity="normal" className="absolute inset-0 opacity-20" />
        <div className="relative">
          <Hero
            title="NEXENTIS - Build Better UI"
            subtitle="Production-grade React + Tailwind components you can copy and ship. Professional, accessible, and fully customizable."
            showProductPreview={true}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white dark:bg-neutral-900 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none opacity-50" />

        <div className="mx-auto max-w-6xl relative">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-neutral-50 mb-4 tracking-tight">
                Why Nexentis?
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                Everything you need to build modern, professional user interfaces
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card3D intensity={2}>
                  <Card className="text-center h-full">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-xl bg-neutral-100/70 dark:bg-neutral-950/30 border border-neutral-200/70 dark:border-neutral-800/70">
                        <feature.icon size={28} className="text-neutral-900 dark:text-neutral-50" strokeWidth={2.5} />
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-neutral-600 dark:text-neutral-400">
                      {feature.description}
                    </CardDescription>
                  </Card>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <TexturedBackground variant="mesh" className="py-20 md:py-28 px-6 -mx-6 rounded-3xl">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4 tracking-tight">
                  Explore Components
                </h2>
                <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                  Browse our collection of carefully crafted components
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((component, index) => (
                <ScrollReveal key={component.path} direction="up" delay={index * 50}>
                  <Link to={component.path} className="block">
                    <Card className="hover-lift h-full transition-all duration-normal hover:shadow-soft-lg">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-neutral-100/70 dark:bg-neutral-950/30 border border-neutral-200/70 dark:border-neutral-800/70 shrink-0">
                          <component.icon size={20} className="text-neutral-900 dark:text-neutral-50" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-base font-semibold text-neutral-900 dark:text-neutral-50 mb-1">
                            {component.name}
                          </CardTitle>
                          <CardDescription className="text-sm text-neutral-600 dark:text-neutral-400">
                            {component.description}
                          </CardDescription>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={300}>
              <div className="text-center mt-12">
                <Link to="/components">
                  <Button size="lg" variant="outline">
                    View All Components
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </TexturedBackground>
      </section>

      <section className="py-20 md:py-28 px-6 bg-neutral-100 dark:bg-neutral-900">
        <TexturedBackground variant="grid" intensity="light" className="py-20 md:py-28 px-6 -mx-6 rounded-3xl">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "12+", label: "Components" },
                { value: "100%", label: "Customizable" },
                { value: "3", label: "Blocks" },
                { value: "Infinite", label: "Possibilities" },
              ].map((stat, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 100}>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </TexturedBackground>
      </section>

      <section className="py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/3 h-[340px] w-[520px] rounded-full bg-brand-500/15 blur-[90px]" />
          <div className="absolute -bottom-24 right-1/4 h-[320px] w-[480px] rounded-full bg-accent-500/12 blur-[90px]" />
        </div>
        <div className="mx-auto max-w-6xl relative">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4 tracking-tight">
                Pricing That Scales
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                Clean tiers with a premium default. Upgrade when you are ready.
              </p>
            </div>
          </ScrollReveal>
          <Pricing />
        </div>
      </section>

      <section className="py-20 md:py-32 px-6">
        <ScrollReveal direction="up">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4 tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Start building beautiful interfaces with our production-ready components
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/components">
                <Button size="lg">Browse Components</Button>
              </Link>
              <Link to="/docs/buttons">
                <Button size="lg" variant="outline">
                  View Documentation
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}

