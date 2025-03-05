import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Admin/LoginPage";
import Dashboard from "./Admin/Dashboard";
import AddJob from "./Admin/AddJob";
import AddInternship from "./Admin/AddInternship";
import ManageApplicationInternship from "./Admin/ManageApplicationInternship";
import ManageCard from "./Admin/ManageCard";
// import Navbar from "./Components/Navbar";
import Footer from "./Pages/Footer";
// import Home from "./Pages/Home";

// Simulated authentication (replace with actual login logic)
const isAuthenticated = () => {
  return localStorage.getItem("isAdmin") === "true"; // Check if admin is logged in
};

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/" />;
};

// Layout for Admin Pages (Navbar & Footer)
const AdminLayout = ({ children }) => {
  return (
    <>
     
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<LoginPage />} />

        {/* Admin Routes (Protected) */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<AdminLayout><Dashboard /></AdminLayout>} />}
        />
        <Route
          path="/manageapplication"
          element={<ProtectedRoute element={<AdminLayout><ManageApplicationInternship /></AdminLayout>} />}
        />
        <Route
          path="/addjob"
          element={<ProtectedRoute element={<AdminLayout><AddJob /></AdminLayout>} />}
        />
        <Route
          path="/addinternship"
          element={<ProtectedRoute element={<AdminLayout><AddInternship /></AdminLayout>} />}
        />
        <Route
          path="/managecard"
          element={<ProtectedRoute element={<AdminLayout><ManageCard /></AdminLayout>} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
