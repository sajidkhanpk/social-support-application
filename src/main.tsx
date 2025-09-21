import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// app
import App from "./App.tsx";

// lib
import "./lib/i18n/i18n.ts";

// styles
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
