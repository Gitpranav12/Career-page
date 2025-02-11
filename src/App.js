import Footer from "./Pages/Footer";
import AddJob from "./Admin/AddJob";
import AddInternship from "./Admin/AddInternship";
import Dashboard from "./Admin/Dashboard";
import "./App.css";

//import ConditionalNavbar from "./Components/ConditionalNavbar";

import LoginPage from "./Admin/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import InternshipApplicationForm from "./Frontend/Internship/InternshipApplicationForm";
import InternshipCard from "./Frontend/Internship/InternshipCard";
import ManageApplicationInternship from "./Admin/ManageApplicationInternship";

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

export default App;
