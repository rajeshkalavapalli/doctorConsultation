const express = require('express')
const router = express.Router()
const {allDoctor,AddnewDoctor,deleteDoctor} = require('../controller/doctorController.js')
const { authmiddleware } = require('../middileware/authMiddleware')

router.get('/', authmiddleware,allDoctor )
router.post('/',authmiddleware, AddnewDoctor)
router.delete('/:id',authmiddleware, deleteDoctor)







module.exports = router
