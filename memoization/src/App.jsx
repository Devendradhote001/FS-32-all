import React, { useCallback, useMemo, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  console.log("App rendering...");
  const [count, setCount] = useState(0);

  const calc = useMemo(() => {
    console.log("return wala fn rendering...");
    return 500 + 900;
  }, []);

  const greet = useCallback(() => {
    console.log("hello, good evening");
  }, []);

  return (
    <div>
      <h1>
        This ia app - {count} - {calc}
      </h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <Home greet={greet} />
      <About />
    </div>
  );
};

export default App;
