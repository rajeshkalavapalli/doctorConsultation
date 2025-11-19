const bcrypt = require('bcrypt')
const User = require('../schema/userSchema.js')


const addUser = async(req,res)=>{
    const {name,email,phone,password,role="user"} = req.body;

    try{
        
        const existingUser = await User.findOne({$or:[{phone},{email}]});
        if(existingUser){
            res.status(403).json({
                message:"already registerd please try with new email/mobile"
            })
        }else{
            const salt = await bcrypt.genSalt(10)
            const hashpassword = await bcrypt.hash(password,salt)


            const newCreatedUser = new User({
                name,
                email,
                phone,
                password:hashpassword,
                role
            })
            const finalUser = await newCreatedUser.save()
            res.status(201).json({
                message:"usercreated sucessfully",
                user: finalUser,
            })
        }


    }catch(error){
        res.status(500).json({
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