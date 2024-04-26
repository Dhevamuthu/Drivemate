import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from './Components/LoginForm'
import Register from './Components/Register';
import RegisterUser from './Components/RegisterUser';
import Home from './Components/Customer/Home';
import BookNow from './Components/Customer/BookNow';
import DriverProfiles from './Components/Customer/DriverProfile';
import DriverHome from './Components/Driver/DriverHome';
import MyTravels from './Components/Customer/MyTravels';
import UserProfile from './Components/Customer/UserProfile';
import Bookedtrip from './Components/Driver/BookedTrip';
import AcceptTrip from './Components/Driver/AcceptTrip';
import RegisterDriver from './Components/RegisterDriver';


function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/register-driver" element={<RegisterDriver/>}/>
        <Route path="/" element={<Login/>} />
        <Route path="/register-user" element={<RegisterUser/>} />
        <Route path="/userhome" element={<Home />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/Driverdetails" element={<DriverProfiles/>}/>
        <Route path="/Driverhome" element={<DriverHome/>}/>
        <Route path="/MyTravels" element={<MyTravels/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/bookedtrip' element={<Bookedtrip/>}/>
        <Route path='/driverprofile' element={<DriverProfiles/>}/>
        <Route path='/accepttrip' element={<AcceptTrip/>}/>      
      </Routes>
    </Router>
  );
}

export default App;
