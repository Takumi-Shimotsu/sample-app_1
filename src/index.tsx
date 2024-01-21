import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { RouterProvider } from "react-router-dom";
import { routesLink } from "./components/routesLink";
import { StateForm } from "./components/StateForm";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={routesLink} />);
