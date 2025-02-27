import React from 'react';
import AddJob from "./Admin/AddJob";
import ManageCard from './Admin/ManageCard';
import AddInternship from "./Admin/AddInternship";
import Dashboard from "./Admin/Dashboard";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import LoginPage from "./Admin/LoginPage";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Pages/Footer";
import ManageApplicationInternship from './Admin/ManageApplicationInternship';
import JobList from './Frontend/Job/jobListShow';
import JobDetails from './Frontend/Job/JobDetails';
import JobApplicationForm from './Frontend/Job/JobApplicationForm';
import InternshipDetails from './Frontend/Internship/InternshipDetails';
import InternshipList from './Frontend/Internship/InternshipList';
import InternshipApplicationForm from './Frontend/Internship/InternshipApplicationForm';
import ShowInternshipApplicant from './Admin/ShowInternshipApplicant';
import ShowJobApplicant from './Admin/ShowJobApplicant';
import JobListAdmin from './Admin/JobListAdmin';
import JobDetailsAdmin from './Admin/JobDetailsAdmin';
import InternshipDetailsAdmin from './Admin/InternshipDetailsAdmin'
import InternshipListAdmin from './Admin/InternshipListAdmin';
function App() {
  return (
    <>
      <Router>
      <ConditionalNavbar />
      <ManageCard />
      <ShowInternshipApplicant/>
      <ShowJobApplicant />

        <Home/>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addInternship" element={<AddInternship />} />
          <Route path="/jobListShow" element={<JobList />} />
          <Route path="/jobDetails/:id" element={<JobDetails />} />
          <Route path="/JobApplicationForm/:id" element={<JobApplicationForm />} />
          <Route path="/InternshipList" element={<InternshipList />} />
          <Route path="/InternshipDetails/:id" element={<InternshipDetails />} />
          <Route path="/InternshipApplicationForm/:id" element={<InternshipApplicationForm />} />
          <Route path="/JobListAdmin" element={<JobListAdmin />} />
        <Route path="/jobDetailsAdmin/:id" element={<JobDetailsAdmin />} />
        <Route path="/InternshipDetailsAdmin/:id" element={<InternshipDetailsAdmin/>} />
        <Route path="/internshiplistadmin" element={<InternshipListAdmin />} />
          <Route path="/addjob" element={<AddJob />} />
          <Route path="/manage" element={<ManageApplicationInternship />} />
        </Routes>
        <ConditionalFooter />
      </Router>
    </>
  );
}

// Conditionally render Navbar based on the current route
const ConditionalNavbar = () => {
  const location = useLocation();
  // Show Navbar only if the path is not '/' (Login page) or '/manage'
  return location.pathname === "/dashboard" ? <Navbar/>: null;
};

// Conditionally render Footer based on the current route
const ConditionalFooter = () => {
  const location = useLocation();
  // Show Footer only on the /dashboard route
  return location.pathname === "/dashboard" ? <Footer /> : null;
};

export default App;
