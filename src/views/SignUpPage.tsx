import { useState } from "react";
import Button from "../components/Button";
import InputForm from "../components/InputForm";

export default function SignUpPage() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    const id = target.id;
    const value = target.value;
    setInputs((values) => ({ ...values, [id]: value }));
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    console.log(inputs);
    try {
      event.preventDefault();
      if (Object.keys(inputs).length === 0) {
        console.error("Error: Inputs are empty");
        return;
      }
      await fetch("/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...inputs }),
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center self-center">
      <div className="my-24 flex w-full flex-col rounded-xl px-6 py-3 dark:bg-gray-800 sm:w-6/12 lg:w-4/12">
        <div className="mb-2 mt-2 flex justify-center whitespace-nowrap font-bold text-gray-900 dark:text-white">
          Sign Up
        </div>
        <form>
          <InputForm
            type="email"
            placeholder="Email"
            onChange={handleChange}
            label="Email"
            htmlFor="email"
          />

          <InputForm
            type="password"
            placeholder="Password"
            onChange={handleChange}
            label="Password"
            htmlFor="password"
          />
          <div className="flex justify-center">
            <Button text={"Sign up"} alt="Sign up" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
}
