import React, { useState, useEffect } from 'react';
import userData from './Datasets/UserData';
import './Customer.css'; // Import CSS file for styling
import Navbar from './NavBar';

const UserProfile = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      // Fetch the user data (simulation)
      setUsers(userData);
    }, []);
  
    return (
        <>
      
        <Navbar/>
        <h1 style={{ textAlign: 'center', backgroundColor: '#000000',color:"#ffffff" }}>My Profile</h1>

      <div className="user-profile-container">
       
        {users.map(user => (
          <div key={user.id} className="user-card">
            <img src={user.image} alt={user.fullName} className="user-image" />
            <div className="user-details">
              <h2>{user.fullName}</h2>
              <p>Email: {user.email}</p>
              <p>Phone Number: {user.phoneNumber}</p>
              <p>Address: {`${user.address.doorNo}, ${user.address.street}, ${user.address.place}, ${user.address.district}, ${user.address.state}`}</p>
            </div>
          </div>
        ))}
      </div>
      
      </>
    );
};

export default UserProfile;
