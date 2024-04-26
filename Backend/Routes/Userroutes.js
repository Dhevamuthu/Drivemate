const signup = require('../Controllers/Signupcontroller');
const verifyToken = require('../Middleware/verifyToken');

module.exports = (app) =>{
    app.post("/signup/user", signup.signupuser);
    app.post("/signup/driver", signup.signupdriver);
    app.post("/login/user", signup.loginuser);  
    app.post("/login/driver", signup.logindriver);  
    app.get("/viewdriver",signup.viewdrivers);    
    app.post("/booktrip",signup.booktrip); 
}