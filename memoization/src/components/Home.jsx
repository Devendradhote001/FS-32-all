import React from "react";

const Home = () => {
  console.log("home rendering...");

  for (let i = 0; i < 900000000; i++) {}
  return (
    <div>
      <h1>This is home</h1>
    </div>
  );
};

export default Home;
