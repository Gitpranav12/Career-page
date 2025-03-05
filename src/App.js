import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Admin/LoginPage";
import Dashboard from "./Admin/Dashboard";
import AddJob from "./Admin/AddJob";
import AddInternship from "./Admin/AddInternship";
import ManageApplicationInternship from "./Admin/ManageApplicationInternship";
import ManageCard from "./Admin/ManageCard";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import JobListShow from "./Frontend/Job/jobListShow";  // Fixed import name
import InternshipList from "./Frontend/Internship/InternshipList";

// Simulated authentication (replace with actual login logic)
const isAuthenticated = () => {
  return localStorage.getItem("isAdmin") === "true"; // Check if admin is logged in
};

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/" />;
};

// Layout for Admin Pages (Footer included)
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
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobListShow />} /> {/* Fixed component name */}
        <Route path="/internships" element={<InternshipList />} />

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
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
