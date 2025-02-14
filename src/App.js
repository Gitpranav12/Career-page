import React from 'react';
import AddJob from "./Admin/AddJob";
import AddInternship from "./Admin/AddInternship";
import Dashboard from "./Admin/Dashboard";
import "./App.css";
<<<<<<< HEAD

import InternshipCard from "./Frontend/Internship/InternshipCard";

//import InternshipCard from './Frontend/Internship/InternshipCard';
import LoginPage from "./Admin/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobList from "./Frontend/Job/jobList";
import InternshipApplicationForm from "./Frontend/Internship/InternshipApplicationForm";
import JobDetails from "./Frontend/Job/JobDetails";
import InternshipList from "./Frontend/Internship/InternshipList";
import InternshipDetails from "./Frontend/Internship/InternshipDetails";

//import Navbar from "./Components/navbar";
import AdminNavbar from "./Components/AdminNavbar";
=======
import Navbar from "./Components/navbar";
// import Home from "./Pages/Home";
import LoginPage from "./Admin/LoginPage";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Pages/Footer";
import ManageApplicationInternship from './Admin/ManageApplicationInternship';
>>>>>>> 27996c21568da92dbb2fa64a1c79762738bdaf73


function App() {
  return (
    <>
      <Router>
<<<<<<< HEAD

      <ConditionalNavbar />
<Routes>
=======
      <ConditionalNavbar />
      
        <Routes>
          
>>>>>>> 27996c21568da92dbb2fa64a1c79762738bdaf73
          <Route path="/" element={<LoginPage />} />
          <Route path="/jobList" element={<JobList/>} />
          <Route path="/jobDetails/:id" element={<JobDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addInternship" element={<AddInternship />} />
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
