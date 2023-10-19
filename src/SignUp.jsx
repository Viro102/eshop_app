import React, { useState } from "react";
import { signUp } from "./services/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onButtonClick = () => {
    signUp(email, password);
  };

  return (
    <div>
      <div>
        <div>Login</div>
      </div>
      <div>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className="inputBox"
        />
      </div>
      <div>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className="inputBox"
        />
      </div>
      <div>
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded"
          type="button"
          onClick={onButtonClick}
          value="Sign Up"
        />
      </div>
    </div>
  );
};

export default SignUp;
