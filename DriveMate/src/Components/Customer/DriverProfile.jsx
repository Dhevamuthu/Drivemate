import React, { useState,useEffect } from "react";
import { driversData } from "./Datasets/Drivers";
import Navbar from "./NavBar";


const DriverProfile = ({ photo, name, location,avail }) => {
  return (
    <div style={styles.containers}>
      <img src={photo} alt={name} style={styles.photo} />
      <div style={styles.details}>
        <h3>{name}</h3>
        <p>{location} - {avail}</p>
      </div>
    </div>
  );
};

const styles = {
  containers: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    margin: "10px",
    textAlign: "center",
    width: "250px",
    height: "250px",
  },
  photo: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  details: {
    fontFamily: "Arial, sans-serif",
  },
};

const DriverProfiles = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDrivers = driversData.filter((driver) =>
    driver.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
   <>
  <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <Navbar />
      <div style={searchBarStyles}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearch}
          style={inputStyles}
        />
        <img src="data:image/jpeg;base64,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" alt="Search" style={iconStyles} />
      </div>
      <div style={wrapperStyles}>
        {filteredDrivers.map((driver) => (
          <DriverProfile
            key={driver.id}
            photo={driver.photo}
            name={driver.name}
            location={driver.location}
            avail={driver.avail}
          />
        ))}
      </div>
      </div>
      </>
  );
};

const searchBarStyles = {
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  marginLeft:"40%",
  paddingTop:"5px",
};

const inputStyles = {
  width: "200px",
  padding: "5px",
  borderRadius: "5px",
  marginRight: "5px",
};

const iconStyles = {
  width:"40px",
  height: "40px",
  paddingTop:"5px",
};

const wrapperStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignitems: "center",
};

export default DriverProfiles;
