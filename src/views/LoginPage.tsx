import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";

export default function LoginPage() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    console.log(inputs);
    try {
      event.preventDefault();
      if (Object.keys(inputs).length < 2) {
        console.error("Error: required inputs are empty");
        alert("required inputs are empty!");
        return;
      }
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...inputs }),
      });
      if (response.status === 200) {
        // TODO: tokens
        navigate("/account");
        const data = await response.json();
        localStorage.setItem("token", data.token);
        console.log(data.token);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-full w-full">
      <div className="my-24 flex h-full content-center items-center justify-center">
        <div className="w-full px-4 lg:w-4/12">
          <div className="relative mb-2 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-white shadow-lg dark:bg-gray-800">
            <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
              <div className="mb-3 mt-5 text-center font-bold text-gray-900 dark:text-white">
                Log in
              </div>

              <form>
                <div className="relative mb-3 w-full">
                  <label className="mb-2 block text-xs font-bold uppercase text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-black placeholder-gray-400 shadow transition-all focus:outline-none focus:ring"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </div>

                <div className="relative mb-3 w-full">
                  <label className="mb-2 block text-xs font-bold uppercase text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-black placeholder-gray-400 shadow transition-all focus:outline-none focus:ring"
                    placeholder="Password"
                    onChange={handleChange}
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

                <div className="mt-6 flex h-12 justify-around text-center">
                  <Button
                    text={"Log in"}
                    alt="Log in"
                    onClick={handleSubmit}
                    className="w-1/3 justify-center"
                  />
                  <p className="flex items-center">OR</p>
                  <Button
                    text={"Sign up"}
                    alt="Sign up"
                    onClick={() => navigate("/sign-up")}
                    className="w-1/3 justify-center"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
