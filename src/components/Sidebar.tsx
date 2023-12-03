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
        <Button
          onClick={handleToggleSidebar}
          alt="Toggle sidebar"
          iconSrc={"/menu.svg"}
          className="absolute top-20"
        />
      </div>
      <div className={`sidebar-content ${sidebarOpen ? "block" : "hidden"}`}>
        <ul>
          <li>
            <Link to={"/login"}>
              <Button text={"Login"} alt="Login" onClick={() => {}} />
            </Link>
          </li>
          <li>
            <Link to={"/sign-up"}>
              <Button text={"Sign up"} alt="Sign up" onClick={() => {}} />
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              <Button text={"Contact"} alt="Contact" onClick={() => {}} />
            </Link>
          </li>
          <li>
            <Link to={"/testProduct"}>
              <Button text={"Product page"} alt="Product" onClick={() => {}} />
            </Link>
          </li>
          <li>
            <Link to={"/cart"}>
              <Button text={"Cart page"} alt="Cart" onClick={() => {}} />
            </Link>
          </li>
          <li>
            <Link to={"/admin"}>
              <Button text={"Admin page"} alt="Admin" onClick={() => {}} />
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              <Button text={"About page"} alt="About" onClick={() => {}} />
            </Link>
          </li>
          <li>
            <Link to={"/account"}>
              <Button text={"Account page"} alt="Account" onClick={() => {}} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
