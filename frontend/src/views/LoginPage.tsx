import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import { useAuth } from "../auth/useAuth";
import { loginUser } from "../api/userService";

export default function LoginPage() {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { setIsLoggedIn, setUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const clearForm = () => {
    setInputs({ email: "", password: "" });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (Object.keys(inputs).length < 2) {
        alert("Error: required inputs are empty");
        return;
      }
      const user = await loginUser(inputs);
      if (user) {
        navigate("/account");
        setIsLoggedIn(true);
        setUser(user);
      } else {
        alert("Error: invalid credentials");
        clearForm();
      }
    } catch (error) {
      alert("Error " + error);
    }
  };

  return (
    <div className="h-full w-full">
      <div className="my-24 flex h-full content-center items-center justify-center">
        <div className="w-full px-4 lg:w-4/12">
          <div className="relative mb-2 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-white shadow-lg dark:bg-gray-800">
            <div className="flex-auto px-4 pb-5 pt-0 lg:px-10">
              <div className="mb-3.5 mt-4 text-center text-lg font-bold text-gray-900 dark:text-white">
                Log in
              </div>
              <form onSubmit={handleSubmit}>
                <InputForm
                  label="Email"
                  name="email"
                  htmlFor="email"
                  type="email"
                  placeholder="Email"
                  className="mb-2.5"
                  value={inputs.email}
                  onChange={handleChange}
                />
                <InputForm
                  label="Password"
                  name="password"
                  htmlFor="password"
                  type="password"
                  placeholder="Password"
                  className="mb-2.5"
                  value={inputs.password}
                  onChange={handleChange}
                />

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
                  <Button type="submit" className="w-1/3 justify-center">
                    <p className="text-base">Log in</p>
                  </Button>
                  <p className="flex items-center">OR</p>
                  <Button onClick={() => navigate("/sign-up")} className="w-1/3 justify-center">
                    <p className="text-base">Sign up</p>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
