import { Home, SquareGanttChart, Layers, GalleryVerticalEnd, Github, BookOpenText, Book } from "lucide-react";


export const navLinks = [
  { label: "Home", path: "/", icon: Home  },
  { label: "Components", path: "/components", icon: SquareGanttChart  },  
  { label: "Docs", path: "/docs/buttons", icon: Book },
  { label: "Github", path: "https://github.com/Rishabhostwal48/UI-Component-Library", icon : Github },

];

export const sidebarLinks = [
  {
    group: "Getting Started",
    collapsed:false,
    items: [
      { label: "Home", path: "/" , icon: Home  },
    ],
  },
  {
    group:"UI Components",
    collapsed: true,
    items:[
        {label:"Buttons", path:"/components/buttons" , icon : SquareGanttChart},
        {label:"Accordion", path:"/components/accodion",icon : Layers},
        {label:"Cards",path: "/docs/cards", icon : GalleryVerticalEnd },
    ],
  },
  {
    group: "Blocks",
    collapsed: true,
    items: [
      { label:"Hero", path:"/blocks/hero"},
      { label: "Pricing", path: "/blocks/pricing"},
    ],
  },
];
