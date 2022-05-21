import * as React from "react";
import { Routes, Route } from "react-router-dom";
import NewLoginPage from "./pages/authentication/login";
import Error from "./pages/error/error";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<NewLoginPage />} />
      </Routes>
    </div>
  );
}
