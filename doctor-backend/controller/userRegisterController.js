const jwt = require('jsonwebtoken')
const User = require('../schema/userSchema')
const bcrypt = require('bcrypt')
const userRegister = async (req, res) => {
    const { name, email, phone, password } = req.body

    try {
        const existUser = await User.findOne({ $or: [{ email }, { phone }] })
        if (existUser) {
            return res.status(409).json({
                success: false,
                message: "user already registered with same mail id or phone try with new email or phone"
            })
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedpassword = await bcrypt.hash(password, salt)

            const newUser = new User({
                name,
                email,
                phone,
                password: hashedpassword,
            })

            const savedUser = await newUser.save()
            return res.status(200).json({
                success: true,
                message: 'user registered sucessfully',
                userid: savedUser._id
            })

        }


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "user registration faild try again",
            error: error.message
        })

    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not registered, please register"
            })
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)
        if (!isPasswordMatched) {
            return res.status(401).json({
                success: false,
                message: "invalid credentials"
            })
        }

        // Generate token after successful login
        const accessToken = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.jwt_Secret_key,
            { expiresIn: "30m" }
        )

        return res.status(200).json({
            success: true,
            message: "login successful",
            accessToken,
            userId: user._id,
            role: user.role
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "unable to login, please try after some time",
            error: error.message
        })
    }
}


module.exports = { userRegister,login }