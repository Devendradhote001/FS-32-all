import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addValue, decrement, increment } from "./features/CounterSlice";
import { addUser } from "./features/UserSlice";

const App = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.user);
  const [inpValue, setInpValue] = useState("");

  return (
    <div>
      <h1>hello</h1>

      <h1>my count value is - {name}</h1>

      <input
        type="text"
        onChange={(e) => setInpValue(e.target.value)}
        placeholder="Add number"
      />
      <button onClick={() => dispatch(addUser(inpValue))}>Add</button>
    </div>
  );
};

export default App;
