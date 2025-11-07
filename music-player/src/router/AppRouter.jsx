import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import MainScreen from "../screens/MainScreen";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <MainScreen />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router } />;
};

export default AppRouter;
