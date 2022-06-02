//? First container gives a min. height of 100% and sets a fixed height of the container to 100vh. Afterwards, it centers everything via flex and justify center to center them horizontally.

import * as React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/authentication/login";
import RegisterPage from "./pages/authentication/register";
import Error from "./pages/error/error";
import HomePage from "./pages/public/homepage";
import Dashboard from "./pages/private/dashboard";
import EventPage from "./pages/public/events";
import UpdateEventPage from "./pages/private/eventUpdate";
import EventDetailsPage from "./pages/public/eventDetails";
import EventForm from "./components/forms/event";
import AboutPage from "./pages/public/about";

export default function App() {
  return (
    <div className="w-full space-y-8">
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="dashboard/create"
            element={<Dashboard dashboardContent={<EventForm />} />}
          />
          <Route path="events" element={<EventPage />} />
          <Route path="event/update/:id" element={<UpdateEventPage />} />
          <Route path="event/:id" element={<EventDetailsPage />} />
          <Route path="event/test" element={<EventDetailsPage />} />

        </Routes>
    </div>
  );
}
