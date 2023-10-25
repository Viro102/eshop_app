import { useState } from "react";
import Button from "./Button.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className={`sidebar fixed left-0 top-0 h-screen w-1/6 bg-gray-900 text-white transition-transform ${
        sidebarOpen ? "sidebar-open" : "sidebar-close"
      }`}
    >
      <div className="relative left-full">
        <Button onClick={handleToggleSidebar} className="absolute top-4">
          <FontAwesomeIcon icon={faBars} />
        </Button>
      </div>
      <div className="sidebar-content">
        <ul>
          <li>
            <Button text={"test"} iconSrc={""}></Button>
          </li>
          <li>testing...</li>
        </ul>
      </div>
    </div>
  );
}
