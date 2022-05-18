import HomePage from "./pages/public/homepage";
import Error from "./pages/error";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import EventPage from "./pages/public/events";
import ContactPage from "./pages/public/contact";
import AboutPage from "./pages/public/about";
import LoginPage from "./pages/authentication/login";
import RegisterPage from "./pages/authentication/register";
import Dashboard from "./pages/dashboard";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error />} />
        <Route path="events" element={<EventPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

