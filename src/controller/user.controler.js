const userService = require('../service/user.service'); // import user service 
const status = require('http-status');                  // import http status
const response = require('../config/response.config');  // import response 

const logger = require('../config/logger');
// users List conroller

let respond;
const getUsers = (req,res)=>{
    respond = response(res.statusCode,"successfuly get data", 
    userService.getUsers())                                  // prepare response 
    logger.info(respond)                                     //  log as info
    res.send(respond)                                       // send response
}

// get user by id
const getUserById = (req,res)=>{
    respond = response(res.statusCode,"successfuly got one user", 
    userService.getUser(req.params.userId))                 // prepare response
    logger.info(respond)                                     // log response
    res.send(respond)                                        // send the data to as response
}

// user created 
const createUser = (req,res)=>{

    if (userService.getUser(req.body.id).length) {              // if user id exists throw error otherwise create user
        respond =  response(status.NOT_ACCEPTABLE,"id exists")  // prepare response 
        logger.error(respond)                                  // log response as error
        return  res.status(status.NOT_ACCEPTABLE).send(respond)  // return  the error to the user
    }else{
        respond = response(res.statusCode,"successfuly created new user",
         userService.createUser(req.body))                      // prepare response
        logger.info(respond)                                     // log response as info
        res.send(respond)
    }
   
}

// user updated 
const editUser = (req,res)=>{

    if (!userService.getUser(req.body.id).length) {             // if id not  exists throw error other wise update 
        respond =  response(status.NOT_ACCEPTABLE,"id not exists for updating") // prepare response 
        logger.error(respond)                                                   //log error
        return  res.status(status.NOT_ACCEPTABLE).send(respond)                 // return the error
    }else{                                     
        respond = response(res.statusCode,"successfuly updated the user",
         userService.updateUser(req.body))  // prepare response
        logger.info(respond)                // log as info 
        res.send(respond)                   // resturn the response
    }    
}

// delete user ... 
const deleteUser = (req,res)=>{

    if (!userService.getUser(req.params.userId).length) {  // if id not  exists throw error other wise delete 
        respond =  response(status.NOT_ACCEPTABLE,"id not exists the user to delete it")
        logger.error(respond)
        return  res.status(status.NOT_ACCEPTABLE).send(respond)
    }else{                                     
        respond  = response(res.statusCode,"successfuly deleted the user", userService.deleteUser(req.params.userId))
        logger.info(respond)
        res.send(respond)
    }
    
    res.send(respond)
}

module.exports={
    getUsers,
    createUser,
    getUserById,
    editUser, 
    deleteUser   
}


