const express = require('express')

const User = require('../schema/userSchema.js')


const addUser = async(req,res)=>{
    const userDtails = req.body;

    try{
        const {email} = userDtails
        const existingUser = await User.findOne({email:email});
        if(!existingUser){
            const newUser = await User.create(userDtails)
            res.status(201).json({
                message: "user Sucessfully created",
                userDetails:newUser
            })
        }else{
            res.status(409).json({
                message:"user already existed please try with new email/mobile",
                
            })
        }


    }catch(error){
        res.status(400).json({
            message:"internal error try after some time",
            error:error,
        })
    }
}


const getUser = async(req,res)=>{
    try{    
        const users = await User.find()
        if(users){
            res.status(200).json({
                message:"user details are fetched sucessfully",
                user:users
            })
        }else{
            res.status(404).json({
                message:"user is not avilable please register",
                user:"not found"
            })
        }

    }catch(error){
        res.status(404).json({
            message:"internal issues try after some time",
            error:error,
        })
    }
}

module.exports = {addUser,getUser}