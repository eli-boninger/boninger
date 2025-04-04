import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./pages/Error";
import { Routes } from "./components/Routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: Routes.map((link) => {
      const { path, element } = link;
      return {
        path,
        element,
      };
    }),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
