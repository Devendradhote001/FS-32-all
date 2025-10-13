import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductPage from "../pages/ProductPage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "",
          element: <AboutPage />,
        },
        {
          path: "product",
          element: <ProductPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
