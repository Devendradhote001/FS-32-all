import React, { useState } from "react";
import Login from "./Login";

const Test = () => {
  const [count, setCount] = useState(0);

  console.log("i m test..");
  return (
    <div>
      <h1>test componxclsadnfkasbent</h1>
      <h1>Count- {count}</h1>

      <button onClick={() => setCount((prev) => prev + 1)}>Incre</button>
    </div>
  );
};

export default Test;
