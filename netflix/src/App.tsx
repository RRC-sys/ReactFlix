import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Styles
import './App.css';

// Pages
import ProfileUser from "./pages/ProfileUser/ProfileUser";
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfileUser />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
