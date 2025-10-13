import React, { useState } from "react";
import Test from "./Test";

const Login = () => {
  console.log("i am login...");
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Login</h1>
      <h1>Count- {count}</h1>

      <button onClick={() => setCount((prev) => prev + 1)}>Incre</button>
      <Test />
    </div>
  );
};

export default Login;
