import {
  Home,
  SquareGanttChart,
  Star,
  Search,
  BookOpenText,
  LayoutTemplate,
  Wand2,
  Github,
  GalleryVerticalEnd,
  Tag,
  Monitor,
  CreditCard,
  PanelsTopLeftIcon,
  Box,
  Table,
  Bell,
} from "lucide-react";

export const commandPaletteItems = [
  { id: "home", label: "Home", description: "Landing page", href: "/", icon: Home, keywords: ["landing"] },
  { id: "components", label: "Components", description: "Browse all components", href: "/components", icon: SquareGanttChart, keywords: ["ui"] },
  { id: "favorites", label: "Favorites", description: "Your saved docs", href: "/favorites", icon: Star, keywords: ["saved", "star"] },
  { id: "search", label: "Search", description: "Search components", href: "/search", icon: Search, keywords: ["find"] },
  { id: "templates", label: "Templates", description: "Real UI layouts and use cases", href: "/templates", icon: LayoutTemplate, keywords: ["examples"] },
  { id: "playground", label: "Playground", description: "Edit props live", href: "/playground", icon: Wand2, keywords: ["props", "sandbox"] },

  { id: "doc-buttons", label: "Docs: Buttons", description: "Variants, sizes, and usage", href: "/docs/buttons", icon: SquareGanttChart, keywords: ["button"] },
  { id: "doc-cards", label: "Docs: Cards", description: "Surface and card patterns", href: "/docs/cards", icon: GalleryVerticalEnd, keywords: ["card"] },
  { id: "doc-badges", label: "Docs: Badges", description: "Status and label badges", href: "/docs/badges", icon: Tag, keywords: ["badge"] },
  { id: "doc-modal", label: "Docs: Modal", description: "Dialogs and overlays", href: "/docs/modal", icon: Monitor, keywords: ["dialog"] },
  { id: "doc-toast", label: "Docs: Toast", description: "Notifications and feedback", href: "/docs/toast", icon: Bell, keywords: ["notification"] },
  { id: "doc-pricing", label: "Docs: Pricing", description: "Pricing table layout", href: "/docs/pricing", icon: CreditCard, keywords: ["plans"] },
  { id: "doc-texture", label: "Docs: Textured Background", description: "Background textures and patterns", href: "/docs/textured-background", icon: PanelsTopLeftIcon, keywords: ["background"] },
  { id: "doc-scroll", label: "Docs: Scroll Reveal", description: "Reveal on scroll utility", href: "/docs/scroll-reveal", icon: PanelsTopLeftIcon, keywords: ["animation"] },
  { id: "doc-3d", label: "Docs: 3D Card", description: "Depth and parallax tilt", href: "/docs/card-3d", icon: Box, keywords: ["tilt"] },
  { id: "doc-table", label: "Docs: Data Table", description: "Tables with sorting", href: "/docs/table", icon: Table, keywords: ["grid"] },

  {
    id: "github",
    label: "GitHub Repository",
    description: "Open the project on GitHub",
    href: "https://github.com/Rishabhostwal48/UI-Component-Library",
    external: true,
    icon: Github,
    keywords: ["repo", "source"],
  },
];

