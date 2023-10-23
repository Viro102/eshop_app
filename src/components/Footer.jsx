import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full">
        <div className="flex justify-between px-9 py-6 max-w-5xl items-center text-center mx-auto">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link to={"/contact"} href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
        <div className="px-4 py-5 bg-gray-100 dark:bg-gray-700 items-center justify-between">
          <div className="flex py-1 mt-0 space-x-5 justify-center text-sm text-gray-500 dark:text-gray-100 text-center">
            &copy; 2023 Adam Virostek. All Rights Reserved.
          </div>
          <div className="flex justify-center items-center py-1">
            <a href="https://discord.gg/eq9fhgW988" className="px-1">
              <img src="/discord.svg" alt="Discord community" className="w-4 h-4" />
            </a>
            <a href="https://twitter.com/Viro102" className="px-1">
              <img src="/X.svg" alt="X page" className="w-4 h-4" />
            </a>
            <a href="https://github.com/Viro102" className="px-1">
              <img src="/github.svg" alt="Github" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
