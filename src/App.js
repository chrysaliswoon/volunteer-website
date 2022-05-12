import HomePage from "./pages/homepage";
import Error from "./components/error";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import EventPage from "./pages/events";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error />} />
        <Route path="events" element={<EventPage />} />
      </Routes>
    </div>
  );
}

