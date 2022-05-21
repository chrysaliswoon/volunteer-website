import * as React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/authentication/login";
import RegisterPage from "./pages/authentication/register";
import Error from "./pages/error/error";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}
