import { Home, SquareGanttChart, Layers, GalleryVerticalEnd, Github, BookOpenText, Book, Monitor, Tag, Star, CreditCard } from "lucide-react";


export const navLinks = [
  { label: "Home", path: "/", icon: Home  },
  { label: "Components", path: "/components", icon: SquareGanttChart  },  
  { label: "Docs", path: "/docs/buttons", icon: Book },
  { label: "Github", path: "https://github.com/Rishabhostwal48/UI-Component-Library", icon : Github },
  {label: "Favorites", path:"/favorites",icon:Star},

];

export const sidebarLinks = [
  {
    group: "Getting Started",
    collapsed:false,
    items: [
      { label: "Home", path: "/" , icon: Home  },
      {label: "Favorites", path:"/favorites",icon:Star}
    ],
  },
  {
    group:"UI Components",
    collapsed: true,
    items:[
        {label:"Buttons", path:"/docs/buttons" , icon : SquareGanttChart},
        {label:"Accordion", path:"/docs/accodion",icon : Layers},
        {label:"Cards",path: "/docs/cards", icon : GalleryVerticalEnd },
        {label: "Badge" , path :"/docs/badges" , icon : Tag},
        {label: "Modal" , path :"/docs/modal" ,  },
    ],
  },
  {
    group: "Blocks",
    collapsed: true,
    items: [
      { label:"Hero", path:"/docs/hero", icon:Monitor},
      { label: "Pricing", path: "/docs/pricing", icon:CreditCard},
    ],
  },
];
