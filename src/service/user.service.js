
const userModel = require('../model/user.model'); // import user model

// get users 
const getUsers =()=> userModel.getUsers()  // get users list from the model

// get user
const getUser= id => userModel.getUser(id)  // get one user from the model

// create user
const createUser= user => userModel.createUser(user)  // create  user to the model

// update user
const updateUser= user => userModel.updateUser(user)  // update  user to the model

// delete user
const deleteUser = id => userModel.deleteUser(id)  // delte  user from the model

module.exports =
{
    getUsers,getUser,
    createUser,updateUser,
    deleteUser
}