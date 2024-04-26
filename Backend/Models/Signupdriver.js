const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema definition
const SignupdetailDriver = new Schema({
    username:{
        type: String,
        required: true,
        unique :[true,"Username already exsists"]
    },
    firstname:String,
    lastname:String,
    
    
    phone:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    password:
    {
        type:String,
        required: true,   
    },
})

//creating model
const Signupmodeldriver = mongoose.model("SignupdetailDriver",SignupdetailDriver);

//exporting the model
module.exports= Signupmodeldriver;