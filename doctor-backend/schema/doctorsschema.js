const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema ({

    doctor_name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true,
    },state:{
        type:String,
        required:true
    },division:{
        type:String,
        required:true,
    },speacality:{
        type:String,
        required:true
    },zone:{
        type:String,
        required:true,
    }
},{timestamps:true})

module.exports = mongoose.model('doctor',doctorSchema)