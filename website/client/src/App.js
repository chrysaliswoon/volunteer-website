//? First container gives a min. height of 100% and sets a fixed height of the container to 100vh. Afterwards, it centers everything via flex and justify center to center them horizontally.

import { BrowserRouter } from "react-router-dom";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/authentication/login";
import RegisterPage from "./pages/authentication/register";
import Error from "./pages/error/error";
import HomePage from "./pages/public/homepage";
import Dashboard from "./pages/private/dashboard";
import EventPage from "./pages/public/events";
import UpdateEventPage from "./pages/authentication/eventUpdate";

export default function App() {
  return (
    // <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="w-full space-y-8">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="events" element={<EventPage />} >
          <Route path="update/:id" element={<UpdateEventPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    // </div>
  );
}
