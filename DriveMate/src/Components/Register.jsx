import React from "react";
import { Link } from "react-router-dom";

function Register(){
    return (
        <div className="main">
            <div className="register">
                <h1>DRIVEMATE Your Travel Companion on the road</h1>
                <p>To continue further </p>
            <h2>Register as.....</h2>
                <Link to="/register-user"><button>TRAVELLER</button></Link>
                <Link to="/register-driver"><button>DRIVER</button></Link>
            </div>
            </div>
    )
}

export default Register;