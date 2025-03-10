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
import InternshipListAdmin from "./Admin/InternshipListAdmin";
import JobListAdmin from "./Admin/JobListAdmin";
import InternshipDetailsAdmin from "./Admin/InternshipDetailsAdmin";
import JobDetailsAdmin from "./Admin/JobDetailsAdmin"; 
import ShowInternshipApplicant from "./Admin/ShowInternshipApplicant";
import ShowJobApplicant from "./Admin/ShowJobApplicant";
import JobDetails from './Frontend/Job/JobDetails';
import JobApplicationForm from './Frontend/Job/JobApplicationForm';
import InternshipDetails from './Frontend/Internship/InternshipDetails';
import InternshipApplicationForm from './Frontend/Internship/InternshipApplicationForm';
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
        <Route path="/jobDetails/:id" element={<JobDetails />} />
          <Route path="/JobApplicationForm/:id" element={<JobApplicationForm />} />
   

        <Route path="/internships" element={<InternshipList />} />
        <Route path="/InternshipDetails/:id" element={<InternshipDetails />} />
          <Route path="/InternshipApplicationForm/:id" element={<InternshipApplicationForm />} />
        
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

        <Route path="/JobListAdmin" element={<JobListAdmin />} />
        <Route path="/jobDetailsAdmin/:id" element={<JobDetailsAdmin />} />
        <Route path="/InternshipDetailsAdmin/:id" element={<InternshipDetailsAdmin/>} />
        <Route path="/internshiplistadmin" element={<InternshipListAdmin />} />
        <Route path="/ShowInternshipApplicant" element={<ShowInternshipApplicant />} />
        <Route path="/ShowJobApplicant" element={<ShowJobApplicant />} />

      </Routes>
    </Router>
  );
}

export default App;
