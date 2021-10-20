const express = require('express'); // import express
const path = require('path');

require('dotenv').config({path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)})  // import enviroment checker

const route = require('./routes/v1'); // import router 

const morganMiddleware = require('./middleware/morgan.middleware');

const httpStatus = require('http-status'); // import status
const ApiError = require('./payload/apiError'); 

const app = express()
app.use(express.json()) // convert requset body to json format 

app.use(morganMiddleware)
app.use('/v1',route)  // user router middleware

// api not found middleware
app.use((req,res,next)=>{
    let error = "Api not found"
    res.status(httpStatus.NOT_FOUND).send(new ApiError(res.statusCode,error))
})



app.listen(process.env.PORT,()=>{
    console.log('lisstening  ... On Port' , process.env.PORT);
})

