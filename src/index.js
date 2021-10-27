const express = require('express'); // import express

const path = require('path');

const cors = require('cors')

var corsOptions = {
  origin: "http://localhost:8000"
};

const app = express()

app.use(cors(corsOptions));

require('dotenv').config(
  {path: path.resolve(__dirname, `${process.env.NODE_ENV || 'production'}.env`)})   // import enviroment checker

const route = require('./routes/v1'); // import router 

const morganMiddleware = require('./middleware/morgan.middleware');

const httpStatus = require('http-status'); // import status
const ApiError = require('./payload/apiError'); 

app.use(express.json()) // convert requset body to json format 

app.use(morganMiddleware)
app.use('/v1',route)  // user router middleware

// api not found middleware
app.use((req,res,next)=>{
    let error = "Api not found"
    res.status(httpStatus.NOT_FOUND).send(new ApiError(res.statusCode,error))
})

// custom errors and system error middleware 
app.use(function (err, req, res, next) {

  let status = err.status || 500   // status code 

  let errors = [
    { status : 500,description : 'Internal Server Error'},
    { status : 400, description : 'Bad Request'}

  ].filter(err=>err.status==status)

  let desc = (errors.length) ? errors[0].description : 0

  let error = ((!desc) ? 0  : new ApiError(status,desc)) || err

  // console.error(err.stack)

  res.status(status).send(error)
})

app.listen(process.env.PORT,()=>{
  console.time('time')
    console.log('lisstening  ... On Port' , process.env.PORT);
  console.timeEnd('time end') 

})

