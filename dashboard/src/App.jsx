import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import UpdateLinks from './pages/UpdateLinks';
import { RequireAuth } from './auth';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RequireAuth><Layout><Services /></Layout></RequireAuth>} />
        <Route path="/services" element={<RequireAuth><Layout><Services /></Layout></RequireAuth>} />
        <Route path="/blogs" element={<RequireAuth><Layout><Blogs /></Layout></RequireAuth>} />
        <Route path="/update-links" element={<RequireAuth><Layout><UpdateLinks /></Layout></RequireAuth>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
