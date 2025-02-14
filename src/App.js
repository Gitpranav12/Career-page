//import Searchbar from './Common/Searchbar';
//import CareerDropdown from './Common/CareerDropdown';
//import ApplicationForm from './Common/ApplicationForm';
import Footer from "./Pages/Footer";
import AddJob from "./Admin/AddJob";
import AddInternship from "./Admin/AddInternship";
import Dashboard from "./Admin/Dashboard";
import "./App.css";

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

//import InternshipApplicationForm from './Frontend/Internship/InternshipApplicationForm';
//import Intenrships from './Pages/Intenrships';
//import ManageApplicationJob from './Admin/ManageApplicationJob';
import ManageApplicationIntenrship from './Admin/ManageApplicationInternship';

function App() {
  return (
    <>
      <Router>

      <ConditionalNavbar />
<Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/jobList" element={<JobList/>} />
          <Route path="/jobDetails/:id" element={<JobDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addInternship" element={<AddInternship />} />
          <Route path="/addjob" element={<AddJob />} />
          <Route path="/manageapplicationinternship" element={<ManageApplicationIntenrship />} />
          

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

// const ConditionalNavbar = () => {
//   const location = useLocation();
//   return location.pathname === "/" ? <Navbar /> : null;
// };

const ConditionalNavbar = () => {
  const location = useLocation();
  console.log("Current Path:", location.pathname); // Debugging output

  if (location.pathname === "/") {
    return <Navbar />; // Show Home Navbar
  } else if (location.pathname.startsWith("/dashboard")) {
    return <AdminNavbar />; // Show Admin Navbar for all dashboard pages
  }

  return null; // No Navbar for other pages
};


export default App;
