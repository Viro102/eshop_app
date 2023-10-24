// TODO: not implemented yet

import Button from "../components/Button";

export default function SignUp() {
  return (
    <div className="flex justify-center self-center">
      <div className="mt-10 flex w-1/3 flex-col">
        <div className="mb-2 mt-10 flex justify-center font-bold">Sign Up</div>
        <form>
          <div className="relative mb-3 w-full">
            <label
              className="mb-2 block text-xs font-bold uppercase text-gray-100"
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
              className="mb-2 block text-xs font-bold uppercase text-gray-100"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              type="password"
              className="mb-3 w-full rounded border-0 bg-white px-3 py-3 text-sm text-black placeholder-gray-400 shadow transition-all focus:outline-none focus:ring"
              placeholder="Password"
            />
          </div>
        </form>
        <div className="flex justify-center">
          <Button text={"Sign Up"} />
        </div>
      </div>
    </div>
  );
}
