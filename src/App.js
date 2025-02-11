//import Searchbar from './Common/Searchbar';
//import CareerDropdown from './Common/CareerDropdown';
//import ApplicationForm from './Common/ApplicationForm';
import AddJob from "./Admin/AddJob";
import AddInternship from "./Admin/AddInternship";
import Dashboard from "./Admin/Dashboard";
import "./App.css";
import Navbar from "./Components/navbar";
import AdminNavbar from "./Components/AdminNavbar";
import Home from "./Pages/Home";
//import InternshipCard from './Frontend/Internship/InternshipCard';
import LoginPage from "./Admin/LoginPage";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

//import InternshipApplicationForm from './Frontend/Internship/InternshipApplicationForm';
//import Intenrships from './Pages/Intenrships';
//import ManageApplicationJob from './Admin/ManageApplicationJob';
//import ManageApplicationIntenrship from './Admin/ManageApplicationInternship';

function App() {
  return (
    <>
      <Router>
      <ConditionalNavbar />
        <Home />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addInternship" element={<AddInternship />} />
          <Route path="/addjob" element={<AddJob />} />
        </Routes>
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
