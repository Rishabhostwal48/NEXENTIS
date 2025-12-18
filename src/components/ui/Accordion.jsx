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
          <div key={index}>
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between px-4 py-3 text-left font-medium hover:bg-gray-50"
            >
              {item.title}
              <ChevronDown
                className={clsx(
                  "h-4 w-4 transition-transform",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            {isOpen && (
                <div className="px-4 pb-4 text-sm text-gray-600">
                    {item.content}
                </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
