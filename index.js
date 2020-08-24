require('dotenv').config()

const express = require("express");
const app = express()
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
//DB CONNECTION
mongoose.connect(process.env.DATABASE,
{
    useNewUrlParser: true,
    useUnifiedTopology : true,
    useCreateIndex : true,
    useFindAndModify:false
})
.then(()=>{
    console.log("DB IS CONNECTED")
})
.catch((err)=>{
    console.log("DB FAILED TO CONNECT")
})

//middlewares
app.use(bodyParser.json())//to use req.body
app.use(cookieParser())
app.use(cors())

//ROUTES SECTION

const customerRoutes = require('./Routes/customer')
app.use('/api',customerRoutes)

const employeeRoutes = require('./Routes/employee')
app.use('/api',employeeRoutes)

const menuRoutes = require('./Routes/menu')
app.use('/api',menuRoutes)

const complainRoutes = require('./Routes/complain')
app.use('/api',complainRoutes)

const orderRoutes = require('./Routes/order');
app.use('/api',orderRoutes)

const billRoutes = require('./Routes/bill');
app.use('/api',billRoutes)
//starting point of a server
const port = process.env.PORT || 4000
app.listen(port,()=>console.log("Listening on port 4000"))