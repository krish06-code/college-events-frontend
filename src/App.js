import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEvent from "./pages/AddEvent";  // ✅ Import this
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEvent />} />  {/* ✅ Route is now valid */}
        </Routes>
      </div>
    </Router>
  );
}
