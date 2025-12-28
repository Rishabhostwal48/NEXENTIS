/**
 * ProductPreview Component
 * 
 * A product-centric visual showing UI components in a mock browser/card layout
 */
import { Card, CardTitle, CardDescription } from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

export default function ProductPreview() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Browser Window Mock */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 mx-4 h-6 bg-white dark:bg-neutral-900 rounded text-xs px-3 flex items-center text-neutral-400 border border-neutral-200 dark:border-neutral-800">
            nexentis.ui/components
          </div>
        </div>

        {/* Component Showcase */}
        <div className="p-6 space-y-4 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="primary">Button</Badge>
            <Badge variant="secondary">Card</Badge>
            <Badge variant="success">Badge</Badge>
          </div>
          
          <Card className="p-4">
            <CardTitle className="text-sm mb-2">Component Preview</CardTitle>
            <CardDescription className="text-xs mb-3">
              Copy and paste components
            </CardDescription>
            <div className="flex gap-2">
              <Button size="sm">Primary</Button>
              <Button size="sm" variant="outline">Secondary</Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Floating Cards Decoration */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 dark:bg-blue-400/10 rounded-2xl blur-xl"></div>
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 dark:bg-purple-400/10 rounded-2xl blur-xl"></div>
    </div>
  );
}

