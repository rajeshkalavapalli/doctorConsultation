const jwt = require('jsonwebtoken');
const User = require('../schema/userSchema');

const authmiddleware = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "No token provided"
            });
        }

        const decoded = jwt.verify(token, process.env.jwt_Secret_key);

        const user = await User.findById(decoded.userid);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user"
            });
        }

        req.user = user;  // <-- store user for next controllers

        next(); // everything is good → go ahead

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong try after some time",
            error: error.message
        });
    }
};

module.exports = { authmiddleware };
