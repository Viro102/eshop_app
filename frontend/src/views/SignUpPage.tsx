import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputForm from "../components/InputForm";

export default function SignUpPage() {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (Object.keys(inputs).length < 2) {
        alert("Error: required inputs are empty");
        return;
      }
      const response = await fetch("http://localhost:3000/api/users/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...inputs }),
      });

      if (response.ok) {
        alert("Sign up successful! Redirecting to login page.");
        navigate("/login");
      } else {
        alert("Sign up failed. Please try again.");
      }
    } catch (error) {
      alert("Error " + error);
    }
  };

  return (
    <div className="flex justify-center self-center">
      <div className="my-24 flex w-full flex-col rounded-xl px-6 py-3 dark:bg-gray-800 sm:w-6/12 lg:w-4/12">
        <div className="mb-3 mt-1 flex justify-center whitespace-nowrap text-lg font-bold text-gray-900 dark:text-white">
          Sign Up
        </div>
        <form onSubmit={handleSubmit}>
          <InputForm
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            label="Email"
            htmlFor="email"
            className="mb-2.5"
            value={inputs.email}
          />

          <InputForm
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            label="Password"
            htmlFor="password"
            className="mb-2.5"
            value={inputs.password}
          />
          <div className="flex justify-center">
            <Button type="submit" className="mb-1 mt-2 h-10 w-1/3 justify-center py-6">
              <p className="text-base">Sign up</p>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
