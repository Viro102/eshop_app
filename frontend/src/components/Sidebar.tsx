import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`sidebar dark:bg-gray-800 ${sidebarOpen ? "sidebar-open" : "sidebar-close"}`}>
      <div className="relative left-full">
        <Button
          onClick={handleToggleSidebar}
          className="absolute top-20 flex h-14 w-16 justify-center"
        >
          <i
            className={`fa-solid fa-bars fa-2xl ${sidebarOpen ? "rotate-90 transition-transform" : ""}`}
          ></i>
        </Button>
      </div>
      <div className={`sidebar-content ${sidebarOpen ? "block" : "hidden"}`}>
        <ul>
          <li className="sidebar-item">
            <Link to={"/cart"}>
              <Button onClick={() => {}}>Cart page</Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
