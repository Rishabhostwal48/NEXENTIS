import { Home, SquareGanttChart, Layers, GalleryVerticalEnd, Github, BookOpenText, Book, Monitor, Tag, Star, CreditCard, Computer, Bell, Box, PanelsTopLeftIcon } from "lucide-react";


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
        {label:"Cards",path: "/docs/cards", icon : GalleryVerticalEnd },
        {label: "Badges" , path :"/docs/badges" , icon : Tag},
        {label: "Modals" , path :"/docs/modal" , icon:Monitor   },
        {label: "Toast" , path :"/docs/toast" , icon:Bell   },
        {label:"Accordion", path:"/docs/accodion",icon : Layers},
        {label:"3D Card", path:"/docs/card-3d",icon : Box},
        {label:"Textured Backgroun", path:"/docs/textured-background",icon : PanelsTopLeftIcon},
        {label:"Scroll Reveal", path:"/docs/scroll-reveal",icon : PanelsTopLeftIcon},
    ],
  },
  {
    group: "Blocks",
    collapsed: true,
    items: [
      { label:"Hero", path:"/docs/hero", icon:Computer},
      { label: "Pricing", path: "/docs/pricing", icon:CreditCard},
    ],
  },
];
