import HomePage from "./pages/homepage";
import Error from "./pages/error";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import EventPage from "./pages/events";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
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

