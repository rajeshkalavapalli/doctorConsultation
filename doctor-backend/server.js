
require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')


const doctorRoutes = require('./routes/doctorRoutes.js')

const userRoutes = require('./routes/userRoutes.js')

const app = express();

const PORT = process.env.PORT || 5000



const connectMONGO = async()=>{
    try{
        const mongoConnect = await mongoose.connect(
            process.env.MONGO_URI
        )
        console.log('mongo connceted sucessfully')
    }catch(error){  
        console.log('unable to connect', error)
    }
}

connectMONGO()

app.use(express.json());
app.use('/api/doctor',doctorRoutes)

app.use('/api/user', userRoutes)


app.listen(PORT,()=>{
    console.log(`Doctor server sucessfully runing on port: ${PORT}`);
    
})