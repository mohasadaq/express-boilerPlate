
const status = require('http-status');       // import http status
const {userService} = require('../service'); // import user service 

const ApiError = require('../payload/apiError'); // import api error 

const ApiResponse = require('../payload/apiResponse'); // import api error 

let error,response;
const logger = require('../config/logger');
// users List conroller

const getUsers = (req,res)=>{
    let users = userService.getUsers()
    response = new ApiResponse(res.statusCode,'successfuly get data',users)                                  // prepare response 
    logger.info(response)                                     //  log as info
    res.send(response)                                       // send response
}

// get user by id
const getUserById = (req,res)=>{

    let user = userService.getUser(req.params.userId)
    response = new ApiResponse(res.statusCode,'successfuly get one user',user) // prepare response
    logger.info(response)                                     // log response
    res.send(response)                                        // send the data to as response
}

// user created 
const createUser = (req,res)=>{

    if (userService.getUser(req.body.id).length) {              // if user id exists throw error otherwise create user
        error =  new ApiError(status.NOT_ACCEPTABLE,"id exists")  // prepare response 
        logger.error(error)                                  // log response as error
        return  res.status(status.NOT_ACCEPTABLE).send(respond)  // return  the error to the user
    }else{
        response = new ApiResponse(res.statusCode,"successfuly created new user",
         userService.createUser(req.body))                      // prepare response
        logger.info(response)                                     // log response as info
        res.send(response)
    }
   
}

// user updated 
const editUser = (req,res)=>{

    if (!userService.getUser(req.body.id).length) {             // if id not  exists throw error other wise update 
        error =  new ApiError(status.NOT_ACCEPTABLE,"id not exists for updating") // prepare response 
        logger.error(error)                                                   //log error
        return  res.status(status.NOT_ACCEPTABLE).send(error)                 // return the error
    }else{                                     
        response = new ApiResponse(res.statusCode,"successfuly updated the user",
         userService.updateUser(req.body))  // prepare response
         logger.info(response)                // log as info 
        res.send(response)                   // resturn the response
    }    
}

// delete user ... 
const deleteUser = (req,res)=>{

    if (!userService.getUser(req.params.userId).length) {  // if id not  exists throw error other wise delete 
        error =  new ApiError(status.NOT_ACCEPTABLE,"id not exists the user to delete it")
        logger.error(error)
        return  res.status(status.NOT_ACCEPTABLE).send(error)
    }else{                                     
        response  = new ApiResponse(res.statusCode,"successfuly deleted the user", userService.deleteUser(req.params.userId))
        logger.info(response)
        res.send(response)
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


