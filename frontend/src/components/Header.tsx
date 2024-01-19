import { Link } from "react-router-dom";

import ThemeSwitch from "./ThemeSwitch";
import Button from "./Button";
import InputForm from "./InputForm";
import { useAuth } from "../auth/useAuth";

export default function Header() {
  const { isLoggedIn } = useAuth();

  const accountLinkDestination = isLoggedIn ? "/account" : "/login";

  return (
    <header className="sticky top-0 z-10">
      <nav className="w-full bg-white px-4 py-3 dark:bg-gray-800 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img
                className="mr-4 w-16 origin-center hover:animate-spin"
                src="/my-logo2.svg"
                alt="website logo"
              />
            </Link>
            <span className="hidden self-center whitespace-nowrap text-xl font-semibold text-gray-900 dark:text-white sm:block">
              E-SHOP
            </span>
          </div>
          <form className="w-2/3">
            <div className="flex-1 px-1 sm:px-4 lg:px-20">
              <InputForm
                label=""
                name="search"
                htmlFor="search"
                placeholder="Search"
                type="search"
                value=""
                onChange={() => {}}
                className="rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                <i className="fa-solid fa-magnifying-glass absolute left-3 top-3.5"></i>
                <Button
                  onClick={() => console.log("clicked search")}
                  className="absolute right-0 h-11"
                >
                  Search
                </Button>
              </InputForm>
            </div>
          </form>

          <div className="flex items-center">
            <Link
              to={accountLinkDestination}
              className="mr-5 hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:flex"
            >
              Account
            </Link>
            <ThemeSwitch />
          </div>
        </div>
      </nav>
    </header>
  );
}
