import React from 'react';
import './Customer.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='navbar' style={{ backgroundColor: "#3498db" }}>
            <img src="src/Images/driveMate.png" alt="LOGO" className='logo'/>
                <div className='icons'>
                    <Link to="/userhome">
                        <img src="src/Images/home.png" alt="home" style={{ width: "70px", height: "auto", paddingTop: "50px"}} />
                    </Link>
                    <Link to="/booknow">
                        <img src="src/Images/BookNow.png" alt="Booknow"  style={{ width: "100px", height: "auto", paddingTop: "40px"}}/>
                    </Link>
                    <Link to="/MyTravels">
                        <img src="src/Images/MyTravels.png" alt="MyTravels"  style={{ width: "100px", height: "auto", paddingTop: "40px"}}/>
                    </Link>
                    
                    <Link to="/Driverdetails">
                        <img src="src/Images/Drivers.png" alt="DriverProfile"  style={{ width: "100px", height: "auto", paddingTop: "40px"}}/>
                    </Link>
                    <Link to="/userprofile">
                    <img src="src/Images/MyProfile.png" alt="MyProfile"  style={{ width: "100px", height: "auto", paddingTop: "40px"}}/>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
