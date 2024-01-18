import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

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
        <Button onClick={handleToggleSidebar} className="absolute top-20">
          <i className="fa-solid fa-bars"></i>
        </Button>
      </div>
      <div className={`sidebar-content ${sidebarOpen ? "block" : "hidden"}`}>
        <ul>
          <li>
            <Link to={"/login"}>
              <Button onClick={() => {}}>Login</Button>
            </Link>
          </li>
          <li>
            <Link to={"/sign-up"}>
              <Button onClick={() => {}}>Sign up</Button>
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              <Button onClick={() => {}}>Contact</Button>
            </Link>
          </li>
          <li>
            <Link to={"/product/1"}>
              <Button onClick={() => {}}>Product page</Button>
            </Link>
          </li>
          <li>
            <Link to={"/cart"}>
              <Button onClick={() => {}}>Cart page</Button>
            </Link>
          </li>
          <li>
            <Link to={"/admin"}>
              <Button onClick={() => {}}>Admin page</Button>
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              <Button onClick={() => {}}>About page</Button>
            </Link>
          </li>
          <li>
            <Link to={"/account"}>
              <Button onClick={() => {}}>Account page</Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
