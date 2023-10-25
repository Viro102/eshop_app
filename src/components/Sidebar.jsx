import { useState } from "react";
import Button from "./Button.jsx";

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
        <Button onClick={handleToggleSidebar} iconSrc={"/menu.svg"} className="absolute top-20" />
      </div>
      <div className={`sidebar-content ${sidebarOpen ? "block" : "hidden"}`}>
        <ul>
          <li>
            <Button text={"Account"} iconSrc={""} />
          </li>
          <li>
            <Button text={"Cart"} iconSrc={""} />
          </li>
        </ul>
      </div>
    </div>
  );
}
