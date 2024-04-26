import React from 'react';
import './Driver.css';
import { Link } from 'react-router-dom';

const DriverNavbar = () => {
    return (
        <>
            <div className='navbar' style={{ backgroundColor: "#3498db" }}>
            <img src="src/Images/driveMate.png" alt="LOGO" className='logo'/>
                <div className='icons'>
                    <Link to="/Driverhome">
                        <img src="/src/Images/home.png" alt="home" style={{ width: "70px", height: "auto", paddingTop: "60px"}} />
                    </Link>
                    <Link to="/accepttrip">
                        <img src="/src/Images/AcceptTrip.png" alt="home" style={{ width: "100px", height: "auto", paddingTop: "50px"}} />
                    </Link>
                    <Link to="/bookedtrip">
                        <img src="/src/Images/BookedTrips.png" alt="home" style={{ width: "100px", height: "auto", paddingTop: "50px"}} />
                    </Link>                 
                </div>
           </div>
        </>
    );
};

export default DriverNavbar;
// booked trips,profile,Accept trip,edit profile,logout
