const express = require('express')
const {userRegister,login} = require('../controller/userRegisterController.js')


const router = express.Router()

router.post('/register', userRegister) 
router.post('/login', login)      




module.exports = router