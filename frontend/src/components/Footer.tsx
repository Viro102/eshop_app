import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-5xl px-9 py-6 text-center">
        <div className="w-1/3">
          <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
            Company
          </h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <Link to={"/about"} className="hover:underline">
                About
              </Link>
            </li>
            <li className="mb-4">
              <Link to={"/jobs"} className="hover:underline">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-1/3">
          <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
            Help center
          </h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <Link to={"/contact"} className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/3">
          <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
            Legal
          </h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mb-4">
              <a href="/terms-conditions" className="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="items-center justify-between bg-blue-400 px-4 py-5 dark:bg-gray-700">
        <div className="mt-0 flex justify-center space-x-5 py-1 text-center text-sm text-gray-100">
          &copy; 2023 Adam Virostek. All Rights Reserved.
        </div>
        <div className="flex items-center justify-center py-1">
          <a href="https://discord.gg/eq9fhgW988" className="px-1">
            <img src="/discord.svg" alt="Discord community" className="filter-invert h-4 w-4" />
          </a>
          <a href="https://twitter.com/Viro102" className="px-1">
            <img src="/X.svg" alt="X page" className="filter-invert h-4 w-4" />
          </a>
          <a href="https://github.com/Viro102" className="px-1">
            <img src="/github.svg" alt="Github" className="filter-invert h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
