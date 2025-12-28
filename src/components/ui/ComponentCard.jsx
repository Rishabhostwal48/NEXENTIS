import { Link } from "react-router-dom";
import { Card, CardTitle, CardDescription } from "./Card";
import Badge from "./Badge";
import ComponentPreview from "./ComponentPreview";
import Button from "./Button";
import { Accordion } from "./Accordion";
import TexturedBackground from "./TexturedBackground";
import Card3D from "./Card3D";
import { useState } from "react";
import Modal from "./Modal";
import { Bell } from "lucide-react";

/**
 * Renders a preview for a specific component
 */
function ComponentDemo({ name }) {
  switch (name) {
    case "Buttons":
      return (
        <div className="flex items-center gap-2 flex-wrap">
          <Button size="sm">Primary</Button>
          <Button size="sm" variant="secondary">Secondary</Button>
          <Button size="sm" variant="outline">Outline</Button>
        </div>
      );
    
    case "Badges":
      return (
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
        </div>
      );
    
    case "Cards":
      return (
        <div className="w-full">
          <Card className="p-3">
            <CardTitle className="text-sm mb-1">Card Title</CardTitle>
            <CardDescription className="text-xs">
              Card description text
            </CardDescription>
          </Card>
        </div>
      );
    
    case "Accordion":
      return (
        <div className="w-full">
          <Accordion
            items={[
              { title: "Item 1", content: "Content" },
              { title: "Item 2", content: "Content" }
            ]}
            multiple={false}
          />
        </div>
      );
    
    case "Textured Background":
      return (
        <TexturedBackground variant="dots" intensity="normal" className="w-full h-full rounded">
          <div className="p-4 text-xs text-neutral-600 dark:text-neutral-400">
            Dots Pattern
          </div>
        </TexturedBackground>
      );
    
    case "3D Card":
      return (
        <Card3D intensity={2}>
          <Card className="p-3">
            <CardTitle className="text-sm">Hover Me</CardTitle>
          </Card>
        </Card3D>
      );
    
    case "Hero":
      return (
        <div className="w-full text-center py-4">
          <div className="text-lg font-bold mb-1">Hero Title</div>
          <div className="text-xs text-neutral-600 dark:text-neutral-400">Hero subtitle</div>
        </div>
      );
    
    case "Pricing":
      return (
        <div className="w-full p-2 border rounded-lg">
          <div className="text-xs font-semibold mb-1">$29/mo</div>
          <div className="text-xs text-neutral-600 dark:text-neutral-400">Pro Plan</div>
        </div>
      );
    
    case "Modals":
      return (
        <div className="w-full flex items-center justify-center">
          <Button size="sm" variant="outline">Open Modal</Button>
        </div>
      );
    
    case "Toast":
      return (
        <div className="w-full flex items-center justify-center gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-green-600 text-white text-xs flex items-center gap-1.5">
            <Bell size={12} />
            Success message
          </div>
        </div>
      );
    
    case "Scroll Reveal":
      return (
        <div className="w-full text-center">
          <div className="text-xs text-neutral-600 dark:text-neutral-400">
            Scroll to reveal
          </div>
        </div>
      );
    
    default:
      return (
        <div className="text-xs text-neutral-400">
          Preview
        </div>
      );
  }
}

export default function ComponentCard({ component }) {
  return (
    <Link
      to={component.path}
      className="block h-full group"
    >
      <Card className="h-full hover-lift hover:shadow-lg transition-all duration-normal overflow-hidden flex flex-col">
        {/* Preview Section */}
        <div className="relative bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 p-4 -mx-6 -mt-6 mb-4">
          <ComponentPreview componentName={component.name}>
            <ComponentDemo name={component.name} />
          </ComponentPreview>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 shrink-0 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
              <component.icon size={20} className="text-neutral-900 dark:text-neutral-50" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <CardTitle className="text-base font-semibold text-neutral-900 dark:text-neutral-50 mb-0">
                  {component.name}
                </CardTitle>
                <Badge variant="secondary" className="text-xs shrink-0">
                  {component.category}
                </Badge>
              </div>
              <CardDescription className="text-sm text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-2">
                {component.description}
              </CardDescription>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {component.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}

