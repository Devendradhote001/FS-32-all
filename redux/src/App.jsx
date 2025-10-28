import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  let count = useSelector((state) => state.count.value);

  return (
    <div>
      <h1>hello</h1>

      <h1>my count value is - {count}</h1>
    </div>
  );
};

export default App;
