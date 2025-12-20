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
    <div className="w-full divide-y rounded-md border">
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
       className="flex w-full items-center justify-between px-4 py-3 font-medium hover:bg-gray-50"
      >
        {title}
        <ChevronDown
         className={clsx(
          "h-4 w-4 transition-transform duration-300",
          isOpen && "rotate-180"
         )}
        />
      </button>

      <div
        style={{ height }}
        className="transition-all duration-300 ease-in-out"
      >
        <div ref={ref} className="px-4 pb-4 text-sm text-gray-600">
          {children}
        </div>
      </div>
    </div>
  )
}
