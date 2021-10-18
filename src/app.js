const express = require('express'); // import express

const config = require('./config')  // import enviroment checker

const route = require('./routes/v1/catalog.route'); // import router catalog

const morganMiddleware = require('./middleware/morgan.middleware');
const status = require('http-status');

const app = express()
app.use(express.json()) // convert requset body to json format 


app.use(morganMiddleware)
app.use('/v1',route)  // user router middleware



app.listen(config.checkEnv(),()=>{
    console.log('lisstening  ... On Port' , config.checkEnv());
})

