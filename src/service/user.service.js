const { userModel } = require("../model"); // import user model

const getUsers = () => userModel.getUsers(); // get users list from the model
const getUser = (id) => userModel.getUser(id); // get one user from the model
const createUser = (user) => userModel.createUser(user); // create  user to the model
const updateUser = (user) => userModel.updateUser(user); // update  user to the model
const deleteUser = (id) => userModel.deleteUser(id); // delete  user from the model

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
