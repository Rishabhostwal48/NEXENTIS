import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

export function Accordion({ items, multiple = false }) {
  const [openIndex, setOpenIndex] = useState(multiple ? [] : null);

  function toggle(index) {
    if (multiple) {
      setOpenIndex((perv) =>
        perv.includes(index)
          ? perv.filter((i) => i !== index)
          : [...perv, index]
      );
    } else {
      setOpenIndex((perv) => (perv === index ? null : index));
    }
  }

  return (
    <div className="w-full divide-y divide-neutral-200 dark:divide-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
      {items.map((item, index) => {
        const isOpen = multiple
          ? openIndex.includes(index)
          : openIndex === index;

        return (
          <AccordionItem
            key={index}
            title={item.title}
            isOpen={isOpen}
            onClick={() => toggle(index)}
          >
            {item.content}
          </AccordionItem>
        );
      })}
    </div>
  );
}

function AccordionItem({ title, isOpen, onClick, children }) {
  const ref = useRef(null);
  const [height, setHieght] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHieght(ref.current.scrollHeight);
    } else {
      setHieght(0);
    }
  }, [isOpen]);

  return(
    <div className="overflow-hidden">
      <button
       onClick={onClick}
       className="flex w-full items-center justify-between px-4 py-3 font-medium text-neutral-900 dark:text-neutral-50 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
      >
        {title}
        <ChevronDown
         className={clsx(
          "h-4 w-4 text-neutral-500 dark:text-neutral-400 transition-transform duration-normal",
          isOpen && "rotate-180"
         )}
        />
      </button>

      <div
        style={{ height }}
        className="transition-all duration-normal"
      >
        <div ref={ref} className="px-4 pb-4 text-sm text-neutral-600 dark:text-neutral-400">
          {children}
        </div>
      </div>
    </div>
  )
}
