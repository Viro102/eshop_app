import { Link } from "react-router-dom";

import Button from "../components/Button.jsx";

export default function LoginPage() {
  return (
    <div className="h-full w-full">
      <div className="my-24 flex h-full content-center items-center justify-center">
        <div className="w-full px-4 lg:w-4/12">
          <div className="relative mb-2 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-white shadow-lg dark:bg-gray-800">
            <div className="mb-0 rounded-t px-6 py-6">
              <div className="mb-3 text-center">
                <h6 className="text-sm font-bold text-gray-900 dark:text-white">Sign in with</h6>
              </div>
              <div className="flex min-h-fit justify-center text-center">
                <Button
                  text={"Github"}
                  iconSrc={"/github.svg"}
                  alt={"Sign in using github"}
                  className="ml-10 mr-3"
                />
                <Button
                  text={"Google"}
                  iconSrc={"/google.svg"}
                  alt={"Sign in using google"}
                  className="ml-3 mr-10"
                />
              </div>
            </div>
            <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
              <div className="mb-3 text-center font-bold text-gray-900 dark:text-white">
                <small>Or sign in with credentials</small>
              </div>
              <form>
                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-gray-900 dark:text-white"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-black placeholder-gray-400 shadow transition-all focus:outline-none focus:ring"
                    placeholder="Email"
                  />
                </div>

                <div className="relative mb-3 w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase text-gray-900 dark:text-white"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-black placeholder-gray-400 shadow transition-all focus:outline-none focus:ring"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label className="inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox ml-1 h-5 w-5 rounded border-0 text-gray-100"
                    />
                    <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                      Remember me
                    </span>
                  </label>
                </div>

                <div className="mt-6 text-center">
                  <Button text={"Sign In"} className="w-full justify-center" />
                </div>
              </form>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap">
            <div className="w-1/2">
              <a href="#" className="text-gray-900 dark:text-white">
                <small>Forgot password?</small>
              </a>
            </div>
            <div className="w-1/2 text-right">
              <Link to={"/sign-up"} className="text-gray-900 dark:text-white">
                <small>Create new account</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
