import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sidebarLinks } from "../../data/navconfig";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`h-screen border-r bg-white transition-all duration-300  ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        {!collapsed && <span className="font-semibold">UI Lab</span>}
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      <nav className="p-4 space-y-6 text-sm">
        {sidebarLinks.map((section) => (
          <div key={section.section}>
            {!collapsed && (
              <p className="mb-2 text-xs font-semibold text-gray-400 uppercase">
                {section.section}
              </p>
            )}

            <div className="space-y-1">
              {section.items.map((item) => (
                <SidebarItem
                  key={item.path}
                  to={item.path}
                  label={item.label}
                  collapsed={collapsed}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}

function SidebarItem({ to, label, collapsed }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 rounded px-3 py-2 hover:gray-100"
    >
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}
