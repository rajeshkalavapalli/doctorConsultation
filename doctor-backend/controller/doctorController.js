const express = require('express')

const doctor = require('../schema/doctorsschema')

const { authmiddleware } = require('../middileware/authMiddleware');


const allDoctor = async(req,res)=>{
    try{
        const doctors = await doctor.find()
        // let doctorsList = await doctors;

        res.status(200).json({
            message:"doctors list fetched",
            doctors
        })

    }catch(error){
        res.status(500).send({
            message:"unable to find the doctor",
            error:error
        })
    }
}


const AddnewDoctor = async(req,res)=>{
    const newDoctor = req.body;
    

    try{
        const existingDoctor = await doctor.findOne({_id:newDoctor.id})
        if(existingDoctor){
        res.status(409).json({
            message:"same details already existing",
            existingDoctor
        })
    }else{
        const newDoctorDetails  = await doctor.create(newDoctor)
        res.status(201).json({
            message:"doctor added sucessfully",
            newDoctorDetails,

        })
    }
    }catch(error){
    console.error("Mongoose Validation Details:", error); // 
    res.status(400).json({
        message:"unable to create new doctir try after some time ", 
        error: error.message 
    })
}
}

const deleteDoctor = async(req, res)=>{
    const doctorId= req.params.id
    try{
        const doctorDeleted = await doctor.findByIdAndDelete(doctorId)


        if(!doctorDeleted){
              res.status(404).json({
                message:"unable to find the doctor please try with correct id"
            })

        }else{
            res.status(200).json({
                message:"doctor deleted sucessfully",
                deleteDoctor:doctorDeleted
            })
        }

    }catch(error){
        res.status(500).json({
            message:"unable to delete the doctor due to server issues",
            error:error
        })
    }
}


 module.exports = {allDoctor,AddnewDoctor,deleteDoctor}