import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import Button from "./Button";

export default function Header() {
  return (
    <header>
      <nav className="sticky top-0 border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <div className="flex items-center">
            <Link to={"/"}>
              <img className="mr-3 h-9 hover:animate-spin" src="/vite.svg" alt="vite logo" />
            </Link>
            <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-900 dark:text-white">
              E-SHOP
            </span>
          </div>

          <div className="flex-1 px-20">
            <form>
              <label
                htmlFor="default-search"
                className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <svg
                  className="absolute left-4 top-5 h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>

                <input
                  type="search"
                  id="default-search"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Search"
                  required
                />
                <Button text={"Search"} className="absolute bottom-0 right-0 top-0" />
              </div>
            </form>
          </div>

          <div className="flex items-center">
            <Link
              to={"/login"}
              className="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:px-5 lg:py-2.5"
            >
              Account
            </Link>
            <button
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
            ></button>
          </div>
          <div className="flex items-center">
            <ThemeSwitch />
          </div>
        </div>
      </nav>
    </header>
  );
}
