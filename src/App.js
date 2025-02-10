//import Searchbar from './Common/Searchbar';
//import CareerDropdown from './Common/CareerDropdown';
//import ApplicationForm from './Common/ApplicationForm';
import Footer from "./Pages/Footer";
import AddJob from "./Admin/AddJob";
import AddInternship from "./Admin/AddInternship";
import Dashboard from "./Admin/Dashboard";
import "./App.css";
<<<<<<< HEAD
import InternshipCard from './Frontend/Internship/InternshipCard';
=======
<<<<<<< HEAD
//import Home from "./Pages/Home";
//import Navbar from "./Components/navbar";
=======
import Navbar from "./Components/navbar";
import AdminNavbar from "./Components/AdminNavbar";
>>>>>>> 98d92993b76fad1baeeaf7c243b2ab0279a25dd1
//import InternshipCard from './Frontend/Internship/InternshipCard';
>>>>>>> 76e4f15ecaf456f54eabd4674487abe77e1200da
import LoginPage from "./Admin/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//app.js
import InternshipApplicationForm from './Frontend/Internship/InternshipApplicationForm';
//import Intenrships from './Pages/Intenrships';
//import ManageApplicationJob from './Admin/ManageApplicationJob';
import ManageApplicationIntenrship from './Admin/ManageApplicationInternship';

function App() {
  return (
    <>
<<<<<<< HEAD
      <Router>     
=======
      <Router>
<<<<<<< HEAD
     
=======
      <ConditionalNavbar />
>>>>>>> 98d92993b76fad1baeeaf7c243b2ab0279a25dd1
>>>>>>> 76e4f15ecaf456f54eabd4674487abe77e1200da
        <Routes>

          <Route path="/internshipcard" element={<InternshipCard />} />
          <Route path="/apply" element={<InternshipApplicationForm />} />
          <Route path="/" element={<LoginPage />} />
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

export default App;
