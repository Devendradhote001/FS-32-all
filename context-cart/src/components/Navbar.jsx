import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
  let { setToggle } = useContext(MyStore);

  return (
    <div className="w-full flex justify-between px-10">
      <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
        Sastaa FlipCard
      </h1>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="px-6 py-2 text-white bg-green-700 rounded-md cursor-pointer"
      >
        Cart Section
      </button>
    </div>
  );
};

export default Navbar;
