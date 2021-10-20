const status = require('http-status');
const ApiError = require('../payload/apiError');

const logger = require('../config/logger');
const validate = (schema)=> (req,res,nex) =>{

    let {value,error} = schema.validate(req.body);    

    if (error) {
        let message = error.details[0].message;

        let response = new ApiError(status.BAD_REQUEST,message,'','')
        logger.error(response) // api error log

      return  res.status(status.BAD_REQUEST).send(response)
    }

    nex()
}

module.exports= validate