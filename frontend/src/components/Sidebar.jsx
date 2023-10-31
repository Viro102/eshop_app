import { useState } from "react";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";

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
            <Link to={"/login"}>
              <Button text={"Login"} iconSrc={""} />
            </Link>
          </li>
          <li>
            <Link to={"/sign-up"}>
              <Button text={"Sign up"} iconSrc={""} />
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              <Button text={"Contact"} iconSrc={""} />
            </Link>
          </li>
          <li>
            <Link to={"/testProduct"}>
              <Button text={"Product page"} iconSrc={""} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
