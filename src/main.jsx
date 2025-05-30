import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import InternalSite from "./components/InternalSite";

// Ensure Tailwind styles are applied
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InternalSite />
  </React.StrictMode>,
);
