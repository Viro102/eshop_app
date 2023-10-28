import Button from "../components/Button";

export default function SignUpPage() {
  return (
    <div className="flex justify-center self-center">
      <div className="my-24 flex w-full flex-col rounded-xl px-6 py-3 dark:bg-gray-800 sm:w-6/12 lg:w-4/12">
        <div className="mb-2 mt-2 flex justify-center whitespace-nowrap font-bold text-gray-900 dark:text-white">
          Sign Up
        </div>
        <form>
          <div className="relative mb-3 w-full">
            <label className="mb-2 block text-xs font-bold uppercase text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-black placeholder-gray-400 shadow transition-all focus:outline-none focus:ring"
              placeholder="Email"
            />
          </div>

          <div className="relative mb-3 w-full">
            <label className="mb-2 block text-xs font-bold uppercase text-gray-900 dark:text-white">
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
