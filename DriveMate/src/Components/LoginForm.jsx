import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {useNavigate } from "react-router-dom";

function LoginForm() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            let response;
            if (role === 'user') {
                response = await axios.post('http://localhost:3002/login/user', { username, password });
                console.log(response);
                console.log("User logged in successfully");
                navigate("/userhome");
            } else if (role === 'driver') {
                response = await axios.post('http://localhost:3002/login/driver', { username, password });
                console.log(response);
                console.log("Driver logged in successfully");
                navigate("/Driverhome");
                
            }

            
        } catch (error) {
            console.error('Login failed');
            alert("Oops..sorry\nLogin failed try with different account");
        }
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
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
                        <input type="text" id="user" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="formfield">
                        <label htmlFor="passkey">Password</label>
                        <input type="password" id="passkey" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="formfield">
                        <label>
                            <input
                                type="radio"
                                value="user"
                                checked={role === 'user'}
                                onChange={handleRoleChange}
                            />
                            User
                        </label>
                    </div>
                    <div className="formfield">
                        <label>
                            <input
                                type="radio"
                                value="driver"
                                checked={role === 'driver'}
                                onChange={handleRoleChange}
                            />
                            Driver
                        </label>
                    </div>
                    <button type="submit">START JOURNEY</button>
                    <br />
                    <Link to="/register">Click here to SignUp</Link>
                </form>
                <img src="https://media.istockphoto.com/id/178021771/photo/on-the-road-with-a-car-and-trees.jpg?s=612x612&w=0&k=20&c=ombG9CSzGZJ1Hyg9Uv8Zkx4AEdrH63vVsV_IUf-mQ-Y="
                    alt="sideimg" />
            </div>
        </div>
    );
}

export default LoginForm;
