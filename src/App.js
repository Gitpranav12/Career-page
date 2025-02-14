//import Searchbar from './Common/Searchbar';
//import CareerDropdown from './Common/CareerDropdown';
//import ApplicationForm from './Common/ApplicationForm';
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


//import InternshipApplicationForm from './Frontend/Internship/InternshipApplicationForm';
//import Intenrships from './Pages/Intenrships';
//import ManageApplicationJob from './Admin/ManageApplicationJob';
//import ManageApplicationIntenrship from './Admin/ManageApplicationInternship';

function App() {
  return (
    <>
      <Router>
        <InternshipApplicationForm/>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/jobList" element={<JobList/>} />
          <Route path="/jobDetails/:id" element={<JobDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addInternship" element={<AddInternship />} />
          <Route path="/addjob" element={<AddJob />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
