import DashboardLayout from "../components/layout/DashboardLayout";
import ComponentCard from "../components/ui/ComponentCard";
import { SquareGanttChart, GalleryVerticalEnd, Tag, Monitor, CreditCard, Layers, Bell, PanelRight, Layout, Sparkles, Box } from "lucide-react";

const components = [
  {
    name: "Buttons",
    description: "Multiple variants and sizes for all your action needs",
    path: "/docs/buttons",
    icon: SquareGanttChart,
    category: "UI Component",
    tags: ["interactive", "forms"],
  },
  {
    name: "Cards",
    description: "Flexible card components for displaying content",
    path: "/docs/cards",
    icon: GalleryVerticalEnd,
    category: "UI Component",
    tags: ["layout", "content"],
  },
  {
    name: "Badges",
    description: "Status indicators and labels for quick information",
    path: "/docs/badges",
    icon: Tag,
    category: "UI Component",
    tags: ["labels", "status"],
  },
  {
    name: "Modals",
    description: "Dialog and modal components for user interactions",
    path: "/docs/modal",
    icon: Monitor,
    category: "UI Component",
    tags: ["overlay", "dialog"],
  },
  {
    name: "Toast",
    description: "Notification system for user feedback",
    path: "/docs/toast",
    icon: Bell,
    category: "UI Component",
    tags: ["notifications", "feedback"],
  },
  {
    name: "Accordion",
    description: "Collapsible content sections for organized information",
    path: "/docs/accordion",
    icon: Layers,
    category: "UI Component",
    tags: ["collapsible", "content"],
  },
  {
    name: "Hero",
    description: "Eye-catching hero sections for landing pages",
    path: "/docs/hero",
    icon: Monitor,
    category: "Block",
    tags: ["landing", "hero"],
  },
  {
    name: "Pricing",
    description: "Pricing table layouts for subscription plans",
    path: "/docs/pricing",
    icon: CreditCard,
    category: "Block",
    tags: ["pricing", "subscription"],
  },
  {
    name: "3D Card",
    description: "Lightweight 3D tilt effect cards using CSS transforms",
    path: "/docs/card-3d",
    icon: Box,
    category: "UI Component",
    tags: ["3d", "interactive", "effects"],
  },
  {
    name: "Textured Background",
    description: "CSS-based textured background patterns",
    path: "/docs/textured-background",
    icon: Layout,
    category: "UI Component",
    tags: ["background", "patterns", "texture"],
  },
  {
    name: "Scroll Reveal",
    description: "Scroll-triggered reveal animations",
    path: "/docs/scroll-reveal",
    icon: Sparkles,
    category: "UI Component",
    tags: ["animation", "scroll", "reveal"],
  },
];

export default function Components() {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-8 lg:p-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-neutral-50 mb-4 tracking-tight">
            Components
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
            Beautifully designed, production-ready components built with React and Tailwind CSS. Copy and paste into your apps. Accessible. Customizable. Open Source.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component) => (
            <ComponentCard key={component.path} component={component} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
