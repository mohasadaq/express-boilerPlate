
const status = require('http-status');       // import http status
const {userService} = require('../service'); // import user service 

const ApiError = require('../payload/ApiError'); // import api error 

const ApiResponse = require('../payload/ApiResponse'); // import api error 

let error,response;
const logger = require('../config/logger');

const {handleAsync} = require('../util/util')

// users List conroller

const getUsers = handleAsync(async(req,res)=>{
    let users = await userService.getUsers()
    // let message = res.__('message')
    response = new ApiResponse(res.statusCode,'successfuly get data',users)                                  // prepare response 
    logger.info(response)                                     //  log as info
    res.send(response)                                       // send response
})

// get user by id
const getUserById = handleAsync(async(req,res)=>{

    let user = await userService.getUser(req.params.userId)
    if(user.length){
        response = new ApiResponse(res.statusCode,'successfuly get one user',user) // prepare response
    }else{
        throw new ApiError(status.NOT_ACCEPTABLE,'Id not exists ..')
    }
    logger.info(response)                                     // log response
    res.send(response)                                        // send the data to as response
})

// user created 
const createUser = handleAsync(async(req,res)=>{
    let user = await userService.createUser(req.body);
    if(user){
        response = new ApiResponse(res.statusCode,"successfuly created new user")                      // prepare response
    }
    logger.info(response)                                     // log response as info
    res.send(response)   
})

// user updated 
const editUser = handleAsync(async(req,res)=>{    
    let user = await userService.updateUser(req.body);  
    
    if(user){
        response = new ApiResponse(res.statusCode,"successfuly updated the user")  // prepare response
    }
    else{
        throw new ApiError(status.NOT_ACCEPTABLE,'Id not exists ..')
    }
    logger.info(response)                // log as info 
    res.send(response)                   // resturn the response
       
})

// delete user ... 
const deleteUser = handleAsync(async(req,res)=>{
let user = await userService.deleteUser(req.params.userId)
    if(user){
        response  = new ApiResponse(res.statusCode,"successfuly deleted the user")
    }else{
        throw new ApiError(status.NOT_ACCEPTABLE,'Id not exists ..')
    }

    logger.info(response)
    res.send(response) 
})

module.exports={
    getUsers,
    createUser,
    getUserById,
    editUser, 
    deleteUser   
}


