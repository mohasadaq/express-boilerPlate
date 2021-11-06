const status = require('http-status');
const ApiError = require('../payload/ApiError');
const jwt = require('jsonwebtoken');



const logger = require('../config/logger');
const auth =  (req,res,nex) =>{

    let token = req.header('authorization')
    
    if(!token){
      throw new ApiError(401,'your authentication is now expaired')
    }
    
    try {
      
        token = token.split(" ")[1]
        let response = jwt.verify(token,process.env.JWT_SECRET_KEY)
        var decoded = jwt.decode(token, {complete: true});
         if (response) {

             nex()
        }
      } catch(err) {
        throw new ApiError(401,'your authentication is Not Valid')
          console.log(err);
      }

}

module.exports= auth