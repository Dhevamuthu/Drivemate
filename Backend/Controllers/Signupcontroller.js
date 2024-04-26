const Signupmodeluser = require('../Models/SignupdetailUser');
const Signupdriver = require('../Models/Signupdriver');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BooknowTrip = require('../Models/BookNowTrip');

exports.signupuser =(req,res) =>{
    const {
        username,
        firstname,
        lastname,
        phoneno,
        password
    } = req.body 

    //create a new row
    const newuser = new Signupmodeluser({
        username, firstname, lastname, 
        password : bcrypt.hashSync(password, 10),
        phoneno,
    });

    Signupmodeluser.findOne({username}).then((data) => {
        if(data){      
            return res.status(400).send({message: "Username already exsist"});
        }
        else{
            newuser.save() . then(data =>{
                res.status(200).send({message: "Data saved successfully"});
            });
        }
    })
    .catch(err =>{
        return res.status(500).send({message : "Some error occured"});
    });
};

//driver signup 

exports.signupdriver =(req,res) =>{
    const {
        username,
        firstname,
        lastname,
        phone,
        address,
        password,
    } = req.body 

    //create a new row
    const newuser = new Signupdriver({
        username, firstname, lastname, 
        phone,address,
        password : bcrypt.hashSync(password, 10),
        
    });

    Signupdriver.findOne({username}).then((data) => {
        if(data){      
            return res.status(400).send({message: "Drivername already exsist"});
        }
        else{
            newuser.save() . then(data =>{
                res.status(200).send({message: "Driver Data saved successfully"});
            });
        }
    })
    .catch(err =>{
        return res.status(500).send({message : "Some error occured in saving driver details"});
    });
};


exports.loginuser =(req,res) => {

    const {username, password}= req.body;

    Signupmodeluser.findOne({username}).then(data =>{
        if(!data){
            return res.status(404).json({message : "Username doesnot registered"});
        }

        let isvalidpassword = bcrypt.compareSync(password,data.password);

        if(!isvalidpassword){
            res.status(401).send({message: "Invalid Password"});
        }
        
        let token=jwt.sign({id:data._id},  "key");
        res.status(200).send({
            user:{
                id:data._id,
                username:data.username,
            },
            accessToken:token
        });
        
    })
    .catch(err =>{
        res.status(500).send({message:"Server not running"});
    });
   
}; 



exports.logindriver =(req,res) => {

    const {username, password}= req.body;

    Signupdriver.findOne({username}).then(data =>{
        if(!data){
            return res.status(404).json({message : "Username doesnot registered"});
        }

        let isvalidpassword = bcrypt.compareSync(password,data.password);

        if(!isvalidpassword){
            res.status(401).send({message: "Invalid Password"});
        }
        
        let token=jwt.sign({id:data._id},  "key");
        res.status(200).send({
            user:{
                id:data._id,
                username:data.username,
            },
            accessToken:token
        });
        
    })
    .catch(err =>{
        res.status(500).send({message:"Server not running"});
    });
   
}; 

exports.viewdrivers =(req,res)=>{
        Signupdriver.find({}).then(data =>{
            if(!data){
                return res.status(404).json({message : "No data"});
            }
            else{
                res.json({data});
            }
        })
}

exports.booktrip = (req, res) => {
    const {
        fromaddress,
        toaddress,
        duration,
        date,
        time,
        mail,
    } = req.body;

    // Create a new row
    const newtrip = new BooknowTrip({
        fromaddress,
        toaddress,
        duration,
        date,
        time,
        mail,
    });

    // Access user details from req.user
    const user = req.user;

    newtrip.save()
        .then(data => {
            res.status(200).send({ message: "Trip Data saved successfully", user: user });
        })
        .catch(error => {
            console.error(error); // Log the error for debugging purposes
            res.status(500).send({ error: "An error occurred while saving trip data" });
        });
};

