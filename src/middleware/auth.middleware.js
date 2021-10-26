const status = require('http-status');
const ApiError = require('../payload/apiError');
const jwt = require('jsonwebtoken');

const logger = require('../config/logger');
const auth =  (req,res,nex) =>{

    let token = req.header('accesstoken')
    // console.log(token);
    if(!token){
        throw new ApiError(401,'your authentication is now expaired')
    }

    try {
        let response = jwt.verify(token,process.env.JWT_SECRET_KEY)
         if (response) {
             nex()
        }
      } catch(err) {
        throw new ApiError(401,'your authentication is Not Valid')
          console.log(err);
      }

}

module.exports= auth