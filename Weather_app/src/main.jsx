import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CityProvider } from "./context/CityContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CityProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CityProvider>
);
