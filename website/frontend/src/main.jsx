//? First container gives a min. height of 100% and sets a fixed height of the container to 100vh. Afterwards, it centers everything via flex and justify center to center them horizontally.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "tailwindcss/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </div>
    </div>
  </React.StrictMode>
);
