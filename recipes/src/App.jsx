import React, { useEffect } from "react";
import Navigation from "./router/Navigation";
import AppRouter from "./router/AppRouter";
import { useNavigate } from "react-router";

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full">
      <Navigation />
      <AppRouter />
    </div>
  );
};

export default App;
