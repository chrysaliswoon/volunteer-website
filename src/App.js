import HomePage from "./pages/homepage";
import Error from "./components/error";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

