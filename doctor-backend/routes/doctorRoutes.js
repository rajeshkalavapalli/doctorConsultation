const express = require('express')
const router = express.Router()
const {allDoctor,AddnewDoctor,deleteDoctor} = require('../controller/doctorController.js')


router.get('/',allDoctor )
router.post('/',AddnewDoctor)
router.delete('/:id',deleteDoctor)







module.exports = router
