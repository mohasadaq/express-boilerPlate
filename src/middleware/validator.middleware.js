const status = require('http-status');
const response = require('../config/response.config');

const logger = require('../config/logger');
const validate = (schema)=> (req,res,nex) =>{

    let {value,error} = schema.validate(req.body);    

    if (error) {
        let massage = error.details[0].message;
        logger.error(response(status.BAD_REQUEST,massage))

      return  res.status(status.BAD_REQUEST).send(
        response(status.BAD_REQUEST,massage)
      )
    }

    nex()
}

module.exports= validate