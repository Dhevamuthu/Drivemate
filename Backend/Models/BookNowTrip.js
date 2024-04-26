const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripBookUser = new Schema({
    fromaddress:
    {
        type:String,
        required:true,
    },
    toaddress:
    {
        type:String,
        required:true,
    },
    duration:
    {
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true,
    },
    time:{
        type:String,
        required:true,
    },
    mail:{
        type:String,
        required:true,
    }
})

const BooknowTrip = mongoose.model("TripBookUser",TripBookUser);
module.exports=BooknowTrip;