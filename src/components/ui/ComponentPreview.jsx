/**
 * ComponentPreview Component
 * 
 * Renders a live preview/demo of a component for use in component cards
 */

export default function ComponentPreview({ componentName, children }) {
  return (
    <div className="w-full h-32 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 flex items-center justify-center overflow-hidden">
      {children}
    </div>
  );
}


