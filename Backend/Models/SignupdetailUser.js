const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema definition
const SignupdetailUser = new Schema({
    username:{
        type: String,
        required: true,
        unique :[true,"Username already exsists"]
    },
    firstname:String,
    lastname:String,
    
    password:
    {
        type:String,
        required: true,   
    },
    phoneno:Number,
})

//creating model
const Signupmodeluser = mongoose.model("SignupdetailUser",SignupdetailUser);

//exporting the model
module.exports= Signupmodeluser;