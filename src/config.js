const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
})

// console.log(process.env.NODE_ENV);

const checkEnv = () =>{
   if (process.env.NODE_ENV== 'development') 
   return PORT = process.env.PORT || 3000

    else 
   return PORT = process.env.PORT || 8000
}


module.exports={
    checkEnv
}