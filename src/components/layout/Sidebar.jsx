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
      className={`h-screen border-r border-neutral-200 bg-white dark:bg-neutral-900 dark:border-neutral-800 transition-all duration-normal sticky top-0
        ${collapsed ? "w-16" : "w-64"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800">
        {!collapsed && (
          <span className="font-semibold text-neutral-900 dark:text-neutral-50 text-lg">
            Nexentis
          </span>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Nav Groups */}
      <div className="p-4 space-y-6 text-sm overflow-y-auto h-[calc(100vh-73px)]">
        {sidebarLinks.map((section, index) => (
          <div key={section.group}>
            {/* Group Header */}
            {!collapsed && (
              <button
                onClick={() => toggleGroup(index)}
                className="flex w-full items-center justify-between text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
              >
                {section.group}
                {/* <ChevronDown
                  className={`h-4 w-4 transition-transform duration-normal ${
                    groups[index] ? "rotate-180" : ""
                  }`}
                /> */}
              </button>
            )}

            {/* Links */}
            {groups[index] && (
              <div className="mt-2 space-y-1">
                {section.items.map((item) => {
                  const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`
                        flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all duration-normal
                        ${
                          isActive
                            ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 font-medium"
                            : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-neutral-200"
                        }
                      `}
                    >
                      {item.icon && <item.icon size={18} className="shrink-0" />}
                      {!collapsed && <span>{item.label}</span>}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
