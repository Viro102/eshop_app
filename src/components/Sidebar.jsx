import { useState } from "react";
import Button from "./Button.jsx";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className={`sidebar fixed left-0 top-0 h-screen w-1/4 bg-gray-900 text-white transition-transform ${
        sidebarOpen ? "sidebar-open" : "sidebar-close"
      }`}
    >
      <div className="relative left-full">
        <Button
          text="Toggle sidebar"
          onClick={handleToggleSidebar}
          className="absolute top-2.5 w-20"
        />
      </div>
      <div className="sidebar-content">testing... testing...</div>
    </div>
  );
}
