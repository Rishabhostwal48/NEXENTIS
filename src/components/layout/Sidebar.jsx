import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { sidebarLinks } from "../../data/navconfig";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [groups, setGroups] = useState(
    sidebarLinks.map((g) => (g.collapsed ? false : true))
  );
  const location = useLocation();

  function toggleGroup(index) {
    setGroups((prev) => {
      const newGroups = [...prev];
      newGroups[index] = !newGroups[index];
      return newGroups;
    });
  }

  return (
    <aside
      className={`h-screen border-r bg-white transition-all duration-300 
        ${collapsed ? "w-16" : "w-64"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        {!collapsed && <span className="font-semibold">UI Lab</span>}
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      {/* Nav Groups */}

      <div className="p-4 space-y-6 text-sm">
        {sidebarLinks.map((section, index) => (
          <div key={section.group}>
            {/* Group Header */}
            {!collapsed && (
              <button
                onClick={() => toggleGroup(index)}
                className="flex w-full items-center justify-between text-xs font-semibold text-gray-500 uppercase"
              >
                {section.group}
                <ChevronDown
                  className={`h-4 w- transition-transform ${
                    groups[index] ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}

            {/* Links */}
            {groups[index] && (
              <div className="mt-2 space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      flex items-center gap-3 rounded px-3 py-2 text-sm hover:bg-gray-100
                      ${
                        location.pathname.startsWith(item.path)
                          ? "bg-black text-white"
                          : "text-gray-600"
                      }
                      `}
                  >
                    {item.icon && <item.icon size={18} className="shrink-0" />}
                    {!collapsed && <span>{item.label}</span>}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
