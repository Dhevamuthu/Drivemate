const express= require('express');
const mongoose=require('mongoose');
const Signupmodel = require('./Models/SignupdetailUser.js');
const cors = require('cors');
const bodyParser = require('body-parser')
const app=express();
const bcrypt = require('bcrypt');

//Built in middlewares - function is already written
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));
app.use(cors());

//Application level middleware - it runs in the application
app.use(loginrequest);


//connection of backend with database
mongoose.connect('mongodb://localhost:27017/Drivemate')
    .then(()=> console.log("Db connected"))
    .catch((err)=>console.log("Db connection failed"));


//display all users - just for checking whether db is connected
// app.get("/signup",async(req,res)=>{
//     const signupusers= await Signupmodel.find({})
//     res.json(signupusers);
// })

//importing the required routes
require("./Routes/Userroutes.js")(app);

//middleware-simple javascript function()  and it is executed one after another
function loginrequest(req,re,next){
    console.log("User Login Request");
    next(); // it will run the next middleware
}
  
//root level middleware - only execute when a specific request is sent   

//starting the server
app.listen(3002, () => {
    console.log("Server Started");
});
  