const express = require('express')

const UserRoute = express.Router()

const {addUser,getUser}=require('../controller/userController.js')


UserRoute.post('/user',addUser)
UserRoute.get('/user',getUser)



module.exports = UserRoute