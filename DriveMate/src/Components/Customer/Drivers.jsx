import './Customer.css'
import React from 'react';
import DriverProfiles from './DriverProfile';


function Drivers(props) {
  const { username, firstname, lastname, phoneno } = props;

  return (
    <div className="driver-container">
      {/* <img src={photo} alt={name} className="driver-photo" /> */}
      <div className="driver-details">
        console.log("Details");
        console.log({username},{firstname},{lastname},{phoneno});
        <h3>{username}</h3>
        <h4>{firstname}</h4>
        <h4>{lastname}</h4>
        <p>{phoneno}</p>
      </div>
    </div>
  );
}

export default Drivers;