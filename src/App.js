 //import Searchbar from './Common/Searchbar';
 //import CareerDropdown from './Common/CareerDropdown';
 //import ApplicationForm from './Common/ApplicationForm';
import AddJob from './Admin/AddJob';
 import AddInternship from './Admin/AddInternship';
import Dashboard from './Admin/Dashboard';
import './App.css';
import LoginPage from './Admin/LoginPage';

//import InternshipApplicationForm from './Frontend/Internship/InternshipApplicationForm';

function App() {
  return (
    <div>
    <Dashboard/>
    <AddInternship/>
    <AddJob/>
    <LoginPage/>
    
  

  
    </div>
  );
}

export default App;
