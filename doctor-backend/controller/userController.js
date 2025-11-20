const bcrypt = require('bcrypt')
const User = require('../schema/userSchema.js')
const jwt = require('jsonwebtoken')

const addUser = async(req,res)=>{
    const {name,email,phone,password,role="user"} = req.body;

    try{
        
        const existingUser = await User.findOne({$or:[{phone},{email}]});
        if(existingUser){
           return res.status(403).json({
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
            
             const  isPasswordMatched = await bcrypt.compare(password,finalUser.password )
        
        const accessToken = jwt.sign({
            id:finalUser.id,
            username:finalUser.name,
            role:finalUser.role,
        },process.env.jwt_Secret_key,{expiresIn:"15m"})

        return res.status(201).json({
            success:true,
            message:"logged in successfully",
            accessToken,
        })

        }
        

    }
    catch(error){
      return   res.status(500).json({
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