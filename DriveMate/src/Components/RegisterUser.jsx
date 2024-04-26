import React, { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";

function RegisterUser() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        firstname: "",
        lastname: "",
        phoneno:"",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3002/signup/user", formData);
            console.log("Data registered successfully");
            navigate("/");
        } catch (error) {
                console.log("Error occured");
                alert("Oops..sorry\nRegistration Failed..Provide valid credentials");
        }
    };

    return (
        <div className="main">
            <div className="header">
                <img src="src/Images/driveMate.png" alt="logo" />
            </div>
            <div className="signin">
                <form onSubmit={handleSubmit}>
                    <h2>Enter Your details to resume your travel..</h2>
                    <div className="formfield">
                        <label htmlFor="user">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            onChange={handleChange}
                            value={formData.username}
                        />
                    </div>
                    <div className="formfield">
                        <label htmlFor="fuser">Firstname</label>
                        <input
                            type="text"
                            id="firstname"
                            placeholder="Firstname"
                            onChange={handleChange}
                            value={formData.firstname}
                        />
                    </div>
                    <div className="formfield">
                        <label htmlFor="luser">Lastname</label>
                        <input
                            type="text"
                            id="lastname"
                            placeholder="Lastname"
                            onChange={handleChange}
                            value={formData.lastname}
                        />
                    </div>
                    <div className="formfield">
                        <label htmlFor="phone">PhoneNo</label>
                        <input
                            type="number"
                            id="phoneno"
                            placeholder="PhoneNO"
                            onChange={handleChange}
                            value={formData.phoneno}
                        />

                    </div>
                    <div className="formfield">
                        <label htmlFor="passkey">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={formData.password}
                        />
                    </div>
                    <button type="submit">REGISTER</button>
                    <br />
                </form>
                <img
                    src="https://media.istockphoto.com/id/178021771/photo/on-the-road-with-a-car-and-trees.jpg?s=612x612&w=0&k=20&c=ombG9CSzGZJ1Hyg9Uv8Zkx4AEdrH63vVsV_IUf-mQ-Y="
                    alt="sideimg"
                />
            </div>
        </div>
    );
}

export default RegisterUser;