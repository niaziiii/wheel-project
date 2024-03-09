import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import { AppContextProvider } from "./context/index.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </AppContextProvider>
  </React.StrictMode>
);
